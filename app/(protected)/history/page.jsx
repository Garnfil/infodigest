import {Card, CardContent} from "@/components/ui/card";
import {getUser} from "@/lib/actions/auth";
import {getUserDocuments} from "@/lib/actions/document-action";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {format} from "date-fns";
import {Button} from "@/components/ui/button";
import {ArrowRight} from "lucide-react";

export default async function HistoryPage() {
    const user = await getUser();
    const documents = await getUserDocuments(user);
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-2xl mb-4">
                        Documents History
                    </h1>

                    <Link href="/document-processing">
                        <Button className="my-5 " size="lg">
                            Upload Document <ArrowRight />
                        </Button>
                    </Link>
                </div>
                {documents.length > 0 ? (
                    <div className="grid grid-cols-4 gap-5">
                        {documents.map((document) => (
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
                                                {
                                                    document?.document_name
                                                }
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
                        ))}
                    </div>
                ) : (
                    <div className="flex justify-center items-center flex-col gap-3 my-10">
                        <Image
                            src="/empty-box.png"
                            width="150"
                            height="150"
                            alt="Empty Box"
                        />
                        <h6>No Document Found</h6>
                    </div>
                )}
            </div>
        </div>
    );
}
