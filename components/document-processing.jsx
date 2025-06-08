"use client";

import { useEffect, useState } from "react";
import DocumentUploader from "@/components/document-uploader";
import ExtractedTextDisplay from "@/components/extracted-text-display";
import ProcessingTabs from "@/components/document-processing-tabs";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";

export default function DocumentProcessing() {
    const supabase = createClient();
    const [extractedText, setExtractedText] = useState("");
    const [loading, setLoading] = useState(false);
    const [storedDocumentID, setStoredDocumentID] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user);
        };

        getSession();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    return (
        <div className="grid md:grid-cols-3 w-full grid-cols-1 gap-10">
            <div className="w-full">
                <h2 className="text-xl font-bold ">Upload PDF or DOCX</h2>

                <DocumentUploader
                    onFileProcess={setExtractedText}
                    setLoading={setLoading}
                    setStoredDocumentID={setStoredDocumentID}
                    user={user}
                />

                {loading && (
                    <p className="text-blue-600 mt-2">Extracting text...</p>
                )}

                <ExtractedTextDisplay text={extractedText} />
            </div>

            <div className="col-span-2">
                {extractedText ? (
                    <ProcessingTabs
                        extractedText={extractedText}
                        storedDocumentID={storedDocumentID}
                        user={user}
                    />
                ) : (
                    <div className="flex justify-center items-center flex-col gap-3 my-10">
                        <h2 className="font-semibold text-lg">
                            Upload Document
                        </h2>
                        <Image
                            src="/document.gif"
                            width={100}
                            height={100}
                            alt="document-processing"
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
