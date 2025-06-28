import DocumentProcessing from "@/components/document-processing";
import {getUser} from "@/lib/actions/auth";
import {getDocument} from "@/lib/actions/document-action";
import React from "react";

export default async function DocumentPage(context) {
    const {id} = await context.params;
    const document = await getDocument(id);
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8">
                <DocumentProcessing document={document} />
            </div>
        </div>
    );
}
