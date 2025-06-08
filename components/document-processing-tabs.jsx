"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    generateConceptMap,
    generateStudyGuide,
    summarize,
} from "@/lib/actions/document-processing-action";
import React, { useEffect, useState } from "react";
import MarkdownRenderer from "./markdown-renderer";
import ConceptMap from "./concept-map";
import QuestionAnswerBox from "./question-answer-box";
import LoadingSpinner from "./ui/generate-content-spinner";
import { createClient } from "@/lib/supabase/client";

export default function ProcessingTabs({
    extractedText,
    storedDocumentID,
    user,
}) {
    const supabase = createClient();
    const [conceptMapData, setConceptMapData] = useState(null);
    const [defaultTab, setDefaultTab] = useState("account");
    const [studyGuide, setStudyGuide] = useState(null);
    const [summary, setSummary] = useState(null);
    const [loading, setLoading] = useState({
        summarize: false,
        concept_map: false,
        study_guide: false,
    });

    const updateExtractedText = async (value) => {
        try {
            if (!extractedText) return;

            switch (value) {
                case "summarize":
                    if (!summary) {
                        setLoading((prev) => ({ ...prev, summarize: true }));
                        const summaryResult = await summarize(extractedText);
                        setSummary(summaryResult);
                        await updateDocumentDB("summary", summaryResult);
                    }
                    break;

                case "concept_map":
                    if (!conceptMapData) {
                        setLoading((prev) => ({ ...prev, concept_map: true }));
                        const conceptMapResult = await generateConceptMap(
                            extractedText
                        );
                        setConceptMapData(conceptMapResult);
                        await updateDocumentDB("concept_map", conceptMapResult);
                    }
                    break;

                case "study_guide":
                    if (!studyGuide) {
                        setLoading((prev) => ({ ...prev, study_guide: true }));
                        const studyGuideResult = await generateStudyGuide(
                            extractedText
                        );
                        setStudyGuide(studyGuideResult);
                        await updateDocumentDB(
                            "study_guides",
                            studyGuideResult
                        );
                    }
                    break;
            }
        } finally {
            setLoading((prev) => ({ ...prev, [value]: false }));
        }
    };

    const updateDocumentDB = async (column, contentResult) => {
        const { data, error } = await supabase
            .from("documents")
            .update({
                [column]: contentResult,
            })
            .eq("id", storedDocumentID)
            .eq("user_id", user.id)
            .select();

        if (error) {
            console.error("Update failed:", error);
            return;
        }

        console.log("Updated document:", data);
        return data;
    };

    return (
        <Tabs
            defaultValue={defaultTab}
            className="w-full"
            onValueChange={updateExtractedText}
        >
            <TabsList>
                <TabsTrigger value="summarize">Summarize</TabsTrigger>
                <TabsTrigger value="ask_questions">Ask Questions</TabsTrigger>
                <TabsTrigger value="concept_map">Concept Map</TabsTrigger>
                <TabsTrigger value="study_guide">
                    Generate Study Guide
                </TabsTrigger>
            </TabsList>
            <TabsContent value="summarize">
                {loading.summarize ? (
                    <LoadingSpinner />
                ) : summary ? (
                    <div className="p-4 bg-white rounded-lg shadow">
                        <MarkdownRenderer content={summary} />
                    </div>
                ) : (
                    "No summary generated yet. Make sure that you have a content to summarize."
                )}
            </TabsContent>
            <TabsContent value="ask_questions">
                <QuestionAnswerBox extractedText={extractedText} />
            </TabsContent>
            <TabsContent value="concept_map">
                {loading.concept_map ? (
                    <LoadingSpinner />
                ) : conceptMapData ? (
                    <ConceptMap graphData={conceptMapData} />
                ) : (
                    "No concept map generated yet. Make sure that you have a content to generate."
                )}
            </TabsContent>
            <TabsContent value="study_guide">
                {loading.study_guide ? (
                    <LoadingSpinner />
                ) : studyGuide ? (
                    <div className="p-4 bg-white rounded-lg shadow">
                        <MarkdownRenderer content={studyGuide} />
                    </div>
                ) : (
                    "No study guide generated yet. Click the Generate Study Guide tab to create one."
                )}
            </TabsContent>
        </Tabs>
    );
}
