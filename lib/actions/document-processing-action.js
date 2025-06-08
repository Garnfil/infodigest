"use server";
import { openai } from "@/lib/openai";

export const summarize = async (content) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "Summarize the content clearly and concisely using Markdown formatting. Use headings, bullet points, and equations where appropriate. Return only the formatted content without additional commentary.",
            },
            { role: "user", content: content },
        ],
        model: "gpt-4o-mini", // or your preferred model
    });

    return completion.choices[0]?.message.content ?? "";
};

export const ask = async (content, question) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "You are an academic assistant. Only answer questions based on the provided content.",
            },
            {
                role: "user",
                content: `Content:\n${content}\n\nQuestion:\n${question}`,
            },
        ],
        model: "gpt-4o-mini",
    });

    const text = completion.choices[0]?.message.content ?? "";

    return text;
};

export const generateStudyGuide = async (content) => {
    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: "system",
                content:
                    "Create a study guide: summary, key concepts with definitions, and 3 quiz questions.",
            },
            {
                role: "user",
                content: content,
            },
        ],
        model: "gpt-4o-mini",
    });

    const text = completion.choices[0]?.message.content ?? "";

    return text;
};

export const generateConceptMap = async (content) => {
    const prompt = `
    You are a helpful assistant that extracts a concept map from academic text.
    Given the following content, extract key concepts and how they are related. 
    Return a valid JSON structure with:
    - nodes: list of { id, label }
    - edges: list of { source, target, label }

    Return ONLY the JSON, without any additional text or markdown formatting.

    Text:
    "${content}"
  `;

    try {
        const completion = await openai.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "gpt-4-turbo",
            temperature: 0.7,
            response_format: { type: "json_object" }, // This ensures JSON output
        });

        // Extract the content and clean it if necessary
        let responseContent = completion.choices[0].message.content;

        // Remove any markdown code block formatting if present
        responseContent = responseContent
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const data = JSON.parse(responseContent);
        return data;
    } catch (error) {
        console.error("Error generating concept map:", error);
        throw new Error("Failed to generate concept map");
    }
};
