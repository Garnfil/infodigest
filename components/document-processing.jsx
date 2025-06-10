"use client";

import { useEffect, useState } from "react";
import DocumentUploader from "@/components/document-uploader";
import ExtractedTextDisplay from "@/components/extracted-text-display";
import ProcessingTabs from "@/components/document-processing-tabs";
import Image from "next/image";
import { createClient } from "@/lib/supabase/client";
import { Card, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { File, Trash } from "lucide-react";
import { deleteDocument } from "@/lib/actions/document-action";

export default function DocumentProcessing({ document }) {
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

        setExtractedText(document?.extracted_text);
        setStoredDocumentID(document?.id);

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [supabase]);

    const handleDeleteDocument = async () => {
        const response = await deleteDocument(document?.id, user);
        console.log(response);
    };

    return (
        <div className="grid md:grid-cols-3 w-full grid-cols-1 gap-10">
            <div className="w-full">
                <h2 className="text-xl font-bold ">Upload PDF or DOCX</h2>

                {!document ? (
                    <DocumentUploader
                        onFileProcess={setExtractedText}
                        setLoading={setLoading}
                        setStoredDocumentID={setStoredDocumentID}
                        user={user}
                    />
                ) : (
                    <Card className="mt-3 rounded">
                        <CardHeader className="space-y-2">
                            <h2 className="font-bold text-xl">
                                {document?.document_name}
                            </h2>
                            <div className="flex gap-3">
                                <Link target="_blank" href={document?.file_url}>
                                    <Button>
                                        <File /> File Link
                                    </Button>
                                </Link>
                                <Button variant="destructive">
                                    <Trash /> Delete
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>
                )}

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
                        document={document}
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
