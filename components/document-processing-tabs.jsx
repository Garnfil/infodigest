"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ask,
  generateConceptMap,
  generateStudyGuide,
  summarize,
} from "@/lib/actions/document-processing-action";
import React, { useState } from "react";
import MarkdownRenderer from "./markdown-renderer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import ConceptMap from "./concept-map";

export default function ProcessingTabs({ extractedText }) {
  const [conceptMapData, setConceptMapData] = useState(null);
  const [studyGuide, setStudyGuide] = useState(null);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState({
    summarize: false,
    concept_map: false,
    study_guide: false,
    ask_questions: false,
  });
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const updateExtractedText = async (value) => {
    try {
      if (!extractedText) return;

      switch (value) {
        case "summarize":
          if (!summary) {
            setLoading((prev) => ({ ...prev, summarize: true }));
            const summaryResult = await summarize(extractedText);
            setSummary(summaryResult);
          }
          break;

        case "concept_map":
          if (!conceptMapData) {
            setLoading((prev) => ({ ...prev, concept_map: true }));
            const conceptMapResult = await generateConceptMap(extractedText);
            setConceptMapData(conceptMapResult);
          }
          break;

        case "study_guide":
          if (!studyGuide) {
            setLoading((prev) => ({ ...prev, study_guide: true }));
            const studyGuideResult = await generateStudyGuide(extractedText);
            setStudyGuide(studyGuideResult);
          }
          break;
      }
    } finally {
      setLoading((prev) => ({ ...prev, [value]: false }));
    }
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    try {
      setLoading((prev) => ({ ...prev, ask_questions: true }));
      const answerResult = await ask(extractedText, question);
      setAnswer(answerResult);
    } finally {
      setLoading((prev) => ({ ...prev, ask_questions: false }));
    }
  };

  return (
    <Tabs
      defaultValue="account"
      className="w-full"
      onValueChange={updateExtractedText}
    >
      <TabsList>
        <TabsTrigger value="summarize">Summarize</TabsTrigger>
        <TabsTrigger value="ask_questions">Ask Questions</TabsTrigger>
        <TabsTrigger value="concept_map">Concept Map</TabsTrigger>
        <TabsTrigger value="study_guide">Generate Study Guide</TabsTrigger>
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
        <div className="space-y-4">
          <form onSubmit={handleQuestionSubmit} className="space-y-4">
            <div className="mt-3">
              <label
                htmlFor="question"
                className="block text-sm font-bold text-gray-700"
              >
                Ask a question about the content
              </label>
              <div className="mt-1 flex rounded-md ">
                <Input
                  type="text"
                  id="question"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="flex-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border"
                  placeholder="Enter your question here..."
                />
                <Button
                  type="submit"
                  className="ml-2"
                  disabled={loading.ask_questions || !question.trim()}
                >
                  Ask
                </Button>
              </div>
            </div>
          </form>

          {loading.ask_questions ? (
            <LoadingSpinner />
          ) : answer ? (
            <div className="p-4 bg-white rounded-lg shadow">
              <MarkdownRenderer content={answer} />
            </div>
          ) : (
            <div className="p-4 text-gray-500">
              {question
                ? "Submit your question to get an answer"
                : "Enter a question above to get answers based on the content"}
            </div>
          )}
        </div>
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
