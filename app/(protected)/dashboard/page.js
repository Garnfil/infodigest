import AppFeatures from "@/components/app-features";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function page() {
    return (
        <div className="w-full">
            <div className="max-w-7xl mx-auto py-3 lg:px-8">
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="text-center mt-10 mb-5 space-y-3">
                        <h1 className="text-3xl font-semibold">
                            James, So, what exactly do you have in mind?
                        </h1>
                        <p>Begin with uploading your document below.</p>
                    </div>
                    <AppFeatures />
                    <Button className="my-5" size="lg">
                        Upload Document <ArrowRight />
                    </Button>
                    <div className="grid grid-cols-2"></div>
                </div>
            </div>
        </div>
    );
}
