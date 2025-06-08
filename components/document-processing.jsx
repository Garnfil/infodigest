"use client";

import { useState } from "react";
import DocumentUploader from "@/components/document-uploader";
import ExtractedTextDisplay from "@/components/extracted-text-display";
import ProcessingTabs from "@/components/document-processing-tabs";

export default function DocumentProcessing() {
  const [extractedText, setExtractedText] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div className="grid grid-cols-3 gap-10">
      <div className="w-full">
        <h2 className="text-xl font-bold mb-4">Upload PDF or DOCX</h2>

        <DocumentUploader
          onFileProcess={setExtractedText}
          setLoading={setLoading}
        />

        {loading && <p className="text-blue-600 mt-2">Extracting text...</p>}

        {/* <ExtractedTextDisplay text={extractedText} /> */}
      </div>

      <div className="col-span-2">
        <ProcessingTabs extractedText={extractedText} />
      </div>
    </div>
  );
}
