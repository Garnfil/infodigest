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

  const extractTextFromFile = async (file) => {
    setLoading(true);

    try {
      const fileBuffer = await file.arrayBuffer();

      if (file.type === "application/pdf") {
        const text = await pdfToText(file);
        onFileProcess(text);
      } else if (
        file.type ===
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const result = await mammoth.extractRawText({
          arrayBuffer: fileBuffer,
        });
        onFileProcess(result.value);
      } else {
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
        onupdatefiles={setFiles}
        allowMultiple={false}
        allowFileEncode={false}
        allowRemove={false}
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
}
