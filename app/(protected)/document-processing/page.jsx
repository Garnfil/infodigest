import DocumentProcessing from "@/components/document-processing";
import { Button } from "@/components/ui/button";

export const metadata = {
    title: "Document Processing",
    description: "",
};

export default function DocumentProcessingPage() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto py-5 px-6 lg:px-8">
                <DocumentProcessing />
            </div>
        </div>
    );
}
