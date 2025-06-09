import { Card, CardContent } from "@/components/ui/card";
import { getUser } from "@/lib/actions/auth";
import { getUserDocuments } from "@/lib/actions/document-action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

export default async function HistoryPage() {
    const user = await getUser();
    const documents = await getUserDocuments(user);
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8">
                <h1 className="font-bold text-2xl mb-4">Documents History</h1>
                <div className="grid grid-cols-4 gap-5">
                    {documents.length > 0 ? (
                        documents.map((document) => (
                            <Link
                                href={`/documents/${document?.id}`}
                                key={document?.id}
                                className="w-full"
                            >
                                <Card className="w-full rounded-sm">
                                    <CardContent className="space-y-3">
                                        <Image
                                            src="/3d-file.jpg"
                                            width={200}
                                            height={200}
                                            className="w-full h-[200px] object-fit"
                                            alt="paper"
                                        />
                                        <div>
                                            <h2 className="text-xl font-bold">
                                                {document?.document_name}
                                            </h2>
                                            <span className="text-xs">
                                                {format(
                                                    document?.created_at,
                                                    "MMM dd, yyyy"
                                                )}
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))
                    ) : (
                        <div className="text-center my-10">
                            No Documents Found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
