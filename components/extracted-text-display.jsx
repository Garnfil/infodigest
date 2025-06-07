"use client";

export default function ExtractedTextDisplay({ text }) {
  if (!text) return null;

  return (
    <div className="mt-4 bg-gray-100 p-4 rounded whitespace-pre-wrap max-h-96 overflow-auto">
      <h3 className="font-bold mb-2">Extracted Text:</h3>
      <p>{text}</p>
    </div>
  );
}
