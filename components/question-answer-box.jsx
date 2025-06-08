import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ask } from "@/lib/actions/document-processing-action";
import LoadingSpinner from "./ui/generate-content-spinner";
import MarkdownRenderer from "./markdown-renderer";

export default function QuestionAnswerBox({ extractedText }) {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [askLoading, setAskLoading] = useState(false);

    const handleQuestionSubmit = async (e) => {
        e.preventDefault();
        if (!question.trim()) return;

        try {
            setAskLoading(true);
            const answerResult = await ask(extractedText, question);
            setAnswer(answerResult);
        } finally {
            setAskLoading(false);
        }
    };

    return (
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
                            disabled={askLoading || !question.trim()}
                        >
                            Ask
                        </Button>
                    </div>
                </div>
            </form>

            {askLoading ? (
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
    );
}
