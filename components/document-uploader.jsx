"use client";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import mammoth from "mammoth";
import pdfToText from "react-pdftotext";
import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { getRandomLetters } from "@/lib/utils";

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
            // 1. Upload file to Supabase Storage
            const fileExt = file.name.split(".").pop();
            const fileName = `${user.id}-${Date.now()}.${fileExt}`;
            const filePath = `${user.id}/${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from("documents") // Your bucket name
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            // 2. Create Sign URL of the uploaded file
            const {
                data: { signedUrl },
            } = await supabase.storage
                .from("documents")
                .createSignedUrl(filePath, 1209600); // expires in 2 weeks

            // 3. Extract text content
            const filePreviewUrl = URL.createObjectURL(file);
            setPreviewUrl(filePreviewUrl);
            let textResult = await processDocumentFile(file);

            // 4. Store metadata in database
            const { data, error } = await supabase
                .from("documents")
                .insert({
                    user_id: user.id,
                    document_name: `DOC-${
                        Math.floor(Math.random() * 9000) + 1000
                    }-${getRandomLetters(4).toUpperCase()}`,
                    file_name: fileName,
                    file_path: filePath,
                    file_url: signedUrl,
                    extracted_text: textResult,
                })
                .select();

            if (error) {
                throw error;
            }

            const newDocument = data[0];
            setStoredDocumentID(newDocument.id);
        } catch (err) {
            console.error("Error:", err);
            onFileProcess("Failed to process document.");
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

const updateDocumentDB = async (column, contentResult) => {
    const { data, error } = await supabase
        .from("documents")
        .update({
            [column]: contentResult,
        })
        .eq("id", storedDocumentID)
        .eq("user_id", user.id)
        .select();

    if (error) {
        console.error("Update failed:", error);
        return;
    }

    console.log("Updated document:", data);
    return data;
};
