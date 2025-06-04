import React from "react";
import { Card, CardContent } from "./ui/card";

export default function AppFeatures() {
    const features = [
        {
            title: "📄 Summarization",
            description: "Turn lengthy documents into  insights. ",
        },
        {
            title: "💬 Ask Questions",
            description: "Ask anything. Get answers fast. ",
        },
        {
            title: "🧠 Concept Map",
            icon: "",
            description: " Visualize connections like never before. ",
        },
        {
            title: "📓 Generate Study Guide",
            description: " Your personalized study companion. ",
        },
    ];
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((feature, index) => (
                <Card key={index} className="rounded-sm shadow-2xs">
                    <CardContent className="space-y-2">
                        <h2 className="font-bold text-lg">{feature.title}</h2>
                        <p className="text-sm">{feature.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
