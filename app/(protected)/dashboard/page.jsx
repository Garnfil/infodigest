import AppFeatures from "@/components/app-features";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto py-3 px-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="text-center mt-10 mb-5 space-y-3">
            <h1 className="text-3xl font-semibold">
              James, So, what exactly do you have in mind?
            </h1>
            <p>Begin with uploading your document below.</p>
          </div>
          <AppFeatures />
          <Link href="/document-processing">
            <Button className="my-5 " size="lg">
              Upload Document <ArrowRight />
            </Button>
          </Link>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            <Card className="w-full rounded-sm">
              <CardContent className="space-y-3">
                <Image
                  src="/paper.jpg"
                  width={200}
                  height={200}
                  className="w-full h-[200px] object-fit"
                  alt="paper"
                />
                <div>
                  <h2 className="text-xl font-bold">DOC-09253-ABS</h2>
                  <h6>Jan 15, 2025</h6>
                </div>
              </CardContent>
            </Card>
            {/* <Card className="w-full rounded-sm">
              <CardContent className="space-y-3">
                <Image
                  src="/paper.jpg"
                  width={200}
                  height={200}
                  className="w-full h-[200px] object-fit"
                  alt="paper"
                />
                <div>
                  <h2 className="text-xl font-bold">DOC-09253-ABS</h2>
                  <h6>Jan 15, 2025</h6>
                </div>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </div>
    </div>
  );
}
