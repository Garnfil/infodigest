"use client";

import React, { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import mammoth from "mammoth";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import pdfToText from "react-pdftotext";

// Register File Type Plugin
registerPlugin(FilePondPluginFileValidateType);

export default function FileUploader() {
    const [files, setFiles] = useState([]);
    const [extractedText, setExtractedText] = useState("");
    const [loading, setLoading] = useState(false);

    const extractTextFromFile = async (file) => {
        setLoading(true);

        try {
            const fileBuffer = await file.arrayBuffer();

            if (file.type === "application/pdf") {
                const text = await pdfToText(file);
                setExtractedText(text);
            } else if (
                file.type ===
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ) {
                const result = await mammoth.extractRawText({ arrayBuffer: fileBuffer });
                setExtractedText(result.value);
            } else {
                setExtractedText("Unsupported file type.");
            }
        } catch (err) {
            console.error("Error reading file:", err);
            setExtractedText("Failed to extract text.");
        }

        setLoading(false);
    };

    return (
        <div className="max-w-xl mx-auto p-4">
            <h2 className="text-xl font-bold mb-4">Upload PDF or DOCX</h2>

            <FilePond
                files={files}
                onupdatefiles={setFiles}
                allowMultiple={false}
                allowFileEncode={false}
                acceptedFileTypes={[
                    "application/pdf",
                    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                ]}
                labelIdle='Drag & Drop your PDF/DOCX or <span class="filepond--label-action">Browse</span>'
                server={{
                    process: (fieldName, file, metadata, load) => {
                        extractTextFromFile(file);
                        load(); // Notify FilePond it's done
                    },
                }}
            />

            {loading && <p className="text-blue-600 mt-2">Extracting text...</p>}

            {extractedText && (
                <div className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap max-h-96 overflow-auto">
                    <h3 className="font-bold mb-2">Extracted Text:</h3>
                    <p>{extractedText}</p>
                </div>
            )}
        </div>
    );
}
