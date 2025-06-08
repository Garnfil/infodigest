"use client";

import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
import { registerPlugin } from "react-filepond";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import mammoth from "mammoth";
import pdfToText from "react-pdftotext";
import { useState } from "react";

registerPlugin(FilePondPluginFileValidateType);

export default function DocumentUploader({ onFileProcess, setLoading }) {
  const [files, setFiles] = useState([]);
  const [fileType, setFileType] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const extractTextFromFile = async (file) => {
    setLoading(true);

    try {
      // Create preview URL
      const filePreviewUrl = URL.createObjectURL(file);
      setPreviewUrl(filePreviewUrl);
      console.log(filePreviewUrl);

      const fileBuffer = await file.arrayBuffer();

      if (file.type === "application/pdf") {
        const text = await pdfToText(file);
        setFileType("application/pdf");
        onFileProcess(text);
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        setFileType("docx");
        const result = await mammoth.extractRawText({
          arrayBuffer: fileBuffer,
        });
        onFileProcess(result.value);
      } else {
        setFileType(null);
        onFileProcess("Unsupported file type.");
      }
    } catch (err) {
      console.error("Error reading file:", err);
      onFileProcess("Failed to extract text.");
    }

    setLoading(false);
  };

  return (
    <div className="mt-8">
      <FilePond
        files={files}
        maxFiles="1"
        onupdatefiles={setFiles}
        allowMultiple={false}
        allowFileEncode={false}
        allowRemove={true}
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

      {/* Preview section */}
      {previewUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-medium mb-2">Document Preview</h3>
          <div className="border rounded-lg p-4">
            {fileType === "application/pdf" ? (
              <iframe
                src={previewUrl}
                className="w-full h-96 border"
                title="PDF Preview"
                sandbox="allow-same-origin"
              />
            ) : (
              <div className="p-4 bg-gray-50 rounded">
                <p className="text-gray-600">
                  DOCX preview not available. File is ready for processing.
                </p>
                <p className="text-sm mt-2">
                  File: {files[0]?.filename || files[0]?.name}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
