"use client";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import mammoth from "mammoth";
import pdfToText from "react-pdftotext";
import { useState, useEffect, useRef } from "react";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { createClient } from "@/lib/supabase/client";

registerPlugin(FilePondPluginFileValidateType);

export default function DocumentUploader({
    onFileProcess,
    setLoading,
    setStoredDocumentID,
    user,
}) {
    const supabase = createClient();
    const [files, setFiles] = useState([]);
    const [previewUrl, setPreviewUrl] = useState(null);

    useEffect(() => {
        return () => {
            if (previewUrl) URL.revokeObjectURL(previewUrl);
        };
    }, [previewUrl]);

    const extractTextFromFile = async (file) => {
        setLoading(true);

        try {
            const filePreviewUrl = URL.createObjectURL(file);
            setPreviewUrl(filePreviewUrl);
            let textResult = await processDocumentFile(file);

            const { data, error } = await supabase
                .from("documents")
                .insert({
                    user_id: user.id,
                    file_name: file.name,
                    extracted_text: textResult,
                })
                .select();

            if (error) {
                console.error("Insert error:", error);
                onFileProcess("Failed to save document to database.");
                return;
            }

            const newDocument = data[0];
            setStoredDocumentID(newDocument.id);
        } catch (err) {
            console.error("Processing error:", err);
            onFileProcess("Failed to extract text.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-5 w-full">
            <FilePond
                files={files}
                maxFiles="1"
                onupdatefiles={setFiles}
                allowMultiple={false}
                allowFileEncode={false}
                allowRemove={true}
                onremovefile={(error, file) => {
                    console.log("File removed:", file);
                }}
                acceptedFileTypes={[
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ]}
                labelIdle='Drag & Drop your PDF/DOCX or <span class="filepond--label-action">Browse</span>'
                server={{
                    process: (fieldName, file, metadata, load) => {
                        extractTextFromFile(file);
                        load();
                    },
                }}
            />
        </div>
    );

    async function processDocumentFile(file) {
        let extractedText = null;
        if (file.type === "application/pdf") {
            const text = await pdfToText(file);
            onFileProcess(text);
            extractedText = text;
        } else if (
            file.type ===
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        ) {
            const result = await mammoth.extractRawText({
                arrayBuffer: await file.arrayBuffer(),
            });
            onFileProcess(result.value);
            extractedText = result.value;
        } else {
            onFileProcess("Unsupported file type.");
        }

        return extractedText;
    }
}
