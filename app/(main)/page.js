import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    FileText,
    MessageCircleQuestion,
    Brain,
    BookOpen,
    Star,
    CheckCircle,
    ArrowRight,
    Users,
    Clock,
    Zap,
    Upload,
    ChevronDown,
    ChevronRight,
    GraduationCap,
    FlaskConical,
    Briefcase,
    Lightbulb,
    Play,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "InfoDigest Pro — AI-Powered Research & Study Assistant",
    description:
        "Transform how you study and research. Upload documents, get instant summaries, ask questions, and create visual concept maps — all powered by advanced AI.",
};

/* ─────────────────────────────────────────────────────────────
   Small reusable primitives
───────────────────────────────────────────────────────────── */

function Avatar({ initials, color = "#0e716d" }) {
    return (
        <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 border-2 border-white"
            style={{ backgroundColor: color }}
        >
            {initials}
        </div>
    );
}

function SectionLabel({ children }) {
    return (
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#0e716d] uppercase tracking-widest mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0e716d] inline-block" />
            {children}
        </span>
    );
}

/* Placeholder "app screenshot" card */
function AppMockup({ label, children }) {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* fake title bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-gray-100">
                <span className="w-3 h-3 rounded-full bg-red-400" />
                <span className="w-3 h-3 rounded-full bg-yellow-400" />
                <span className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400">{label}</span>
            </div>
            <div className="p-5">{children}</div>
        </div>
    );
}

/* FAQ item */
function FaqItem({ question, answer }) {
    return (
        <details className="group border-b border-gray-100 py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none text-gray-800 font-medium select-none">
                {question}
                <ChevronDown className="h-4 w-4 text-gray-400 transition-transform group-open:rotate-180 flex-shrink-0 ml-4" />
            </summary>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed pr-6">{answer}</p>
        </details>
    );
}

/* ─────────────────────────────────────────────────────────────
   Page
───────────────────────────────────────────────────────────── */

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white font-sans">
            <main className="flex-1">

                {/* ══════════════════════════════════════════
                    HERO
                ══════════════════════════════════════════ */}
                <section className="w-full pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-slate-50 via-white to-teal-50 overflow-hidden">
                    <div className="container px-4 md:px-8 mx-auto max-w-6xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">

                            {/* Left – copy */}
                            <div className="space-y-7">
                                <SectionLabel>AI-Powered Academic Assistant</SectionLabel>

                                <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight tracking-tight text-gray-900">
                                    Study Smarter with{" "}
                                    <span className="text-[#0e716d]">AI that reads</span>{" "}
                                    for you
                                </h1>

                                <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
                                    Upload any document and InfoDigest Pro instantly
                                    delivers summaries, answers your questions, builds
                                    concept maps, and generates personalized study guides —
                                    all in seconds.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/login">
                                        <Button
                                            size="lg"
                                            className="bg-[#0e716d] hover:bg-[#0a5a56] text-white px-8 rounded-full shadow-lg shadow-[#0e716d]/30 transition-all"
                                        >
                                            Get Started Free
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link href="#how-it-works">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="rounded-full border-gray-200 text-gray-700 hover:bg-gray-50 gap-2"
                                        >
                                            <Play className="h-4 w-4 text-[#0e716d] fill-[#0e716d]" />
                                            See How It Works
                                        </Button>
                                    </Link>
                                </div>

                                <div className="flex items-center gap-6 text-sm text-gray-500 pt-1">
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle className="h-4 w-4 text-[#0e716d]" />
                                        No credit card
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle className="h-4 w-4 text-[#0e716d]" />
                                        Free to use
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle className="h-4 w-4 text-[#0e716d]" />
                                        No setup required
                                    </span>
                                </div>
                            </div>

                            {/* Right – hero mockup */}
                            <div className="relative lg:pl-4">
                                <div className="relative z-10">
                                    <AppMockup label="infodigest.pro — Summary View">
                                        {/* Upload row */}
                                        <div className="flex items-center gap-3 mb-4 p-3 bg-teal-50 rounded-xl border border-teal-100">
                                            <FileText className="h-5 w-5 text-[#0e716d] flex-shrink-0" />
                                            <div className="flex-1 min-w-0">
                                                <p className="text-xs font-semibold text-gray-700 truncate">
                                                    research-paper-q42025.pdf
                                                </p>
                                                <div className="flex items-center gap-2 mt-1">
                                                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                        <div className="h-1.5 bg-[#0e716d] rounded-full w-full" />
                                                    </div>
                                                    <span className="text-[10px] text-[#0e716d] font-semibold whitespace-nowrap">
                                                        Processed
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Summary block */}
                                        <div className="bg-blue-50 rounded-xl p-4 mb-3">
                                            <p className="text-[10px] font-bold text-blue-800 uppercase tracking-widest mb-2">
                                                AI Summary
                                            </p>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                This paper explores machine learning applications in
                                                healthcare, focusing on diagnostic accuracy
                                                improvements (+34%) and patient outcome predictions.
                                                Key methods include transformer-based models and
                                                federated learning for data privacy...
                                            </p>
                                        </div>
                                        {/* Quick chips */}
                                        <div className="flex flex-wrap gap-2">
                                            {["Ask a Question", "Concept Map", "Study Guide"].map(
                                                (label) => (
                                                    <span
                                                        key={label}
                                                        className="text-[10px] font-medium px-3 py-1 rounded-full bg-[#0e716d]/10 text-[#0e716d] border border-[#0e716d]/20"
                                                    >
                                                        {label}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </AppMockup>
                                </div>
                                {/* Decorative blobs */}
                                <div className="absolute -top-8 -right-8 w-48 h-48 bg-teal-200/30 rounded-full blur-3xl -z-0" />
                                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl -z-0" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    SOCIAL PROOF STRIP
                ══════════════════════════════════════════ */}
                <section className="w-full py-14 bg-white">
                    <div className="container px-4 md:px-8 mx-auto max-w-4xl text-center">
                        {/* Stacked avatars */}
                        <div className="flex justify-center mb-5">
                            <div className="flex -space-x-3">
                                {[
                                    { i: "SM", c: "#0e716d" },
                                    { i: "JC", c: "#3b82f6" },
                                    { i: "RK", c: "#8b5cf6" },
                                    { i: "AM", c: "#f59e0b" },
                                    { i: "TD", c: "#ec4899" },
                                ].map(({ i, c }) => (
                                    <Avatar key={i} initials={i} color={c} />
                                ))}
                                <div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs text-gray-500 font-semibold">
                                    +9K
                                </div>
                            </div>
                        </div>

                        <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 max-w-2xl mx-auto leading-snug">
                            Summarize research, ace your exams, and{" "}
                            <span className="text-[#0e716d]">learn more effortlessly</span>
                        </p>
                        <p className="mt-4 text-gray-500 text-base max-w-xl mx-auto">
                            Trusted by over 10,000 students, researchers, and educators
                            worldwide.
                        </p>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    HOW IT WORKS
                ══════════════════════════════════════════ */}
                <section
                    id="how-it-works"
                    className="w-full py-16 md:py-24 bg-slate-50"
                >
                    <div className="container px-4 md:px-8 mx-auto max-w-6xl">
                        {/* Header */}
                        <div className="mb-12">
                            <SectionLabel>How It Works</SectionLabel>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
                                Three simple steps to insight
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    step: "01",
                                    icon: <Upload className="h-6 w-6 text-[#0e716d]" />,
                                    title: "Upload Your Document",
                                    desc: "Drag & drop a PDF, DOCX, or paste raw text. We support lecture notes, research papers, and more.",
                                    mockup: (
                                        <div className="mt-4 bg-white rounded-xl border border-dashed border-[#0e716d]/40 p-6 flex flex-col items-center gap-2 text-center">
                                            <Upload className="h-8 w-8 text-[#0e716d]/60" />
                                            <p className="text-xs text-gray-400">
                                                Drop PDF / DOCX here
                                            </p>
                                            <span className="text-[10px] bg-[#0e716d]/10 text-[#0e716d] px-3 py-1 rounded-full font-medium">
                                                Browse Files
                                            </span>
                                        </div>
                                    ),
                                },
                                {
                                    step: "02",
                                    icon: <Brain className="h-6 w-6 text-[#0e716d]" />,
                                    title: "AI Processes Your Content",
                                    desc: "Our AI extracts text, identifies key concepts, and prepares intelligent outputs tailored to your document.",
                                    mockup: (
                                        <div className="mt-4 space-y-2">
                                            {[
                                                { label: "Extracting text", w: "w-full" },
                                                { label: "Identifying concepts", w: "w-4/5" },
                                                { label: "Generating outputs", w: "w-3/5" },
                                            ].map(({ label, w }) => (
                                                <div key={label} className="bg-white rounded-lg p-2.5 border border-gray-100 flex items-center gap-3">
                                                    <div className={`h-1.5 bg-[#0e716d] rounded-full ${w}`} />
                                                    <span className="text-[10px] text-gray-400 whitespace-nowrap">{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ),
                                },
                                {
                                    step: "03",
                                    icon: <Zap className="h-6 w-6 text-[#0e716d]" />,
                                    title: "Get Actionable Outputs",
                                    desc: "Receive summaries, ask questions, explore concept maps, and download study guides — all from one place.",
                                    mockup: (
                                        <div className="mt-4 grid grid-cols-2 gap-2">
                                            {[
                                                { icon: <FileText className="h-4 w-4" />, label: "Summary" },
                                                { icon: <MessageCircleQuestion className="h-4 w-4" />, label: "Q&A" },
                                                { icon: <Brain className="h-4 w-4" />, label: "Mind Map" },
                                                { icon: <BookOpen className="h-4 w-4" />, label: "Study Guide" },
                                            ].map(({ icon, label }) => (
                                                <div key={label} className="bg-white border border-gray-100 rounded-xl p-3 flex flex-col items-center gap-1.5 text-center">
                                                    <span className="text-[#0e716d]">{icon}</span>
                                                    <span className="text-[10px] font-medium text-gray-700">{label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    ),
                                },
                            ].map(({ step, icon, title, desc, mockup }) => (
                                <div
                                    key={step}
                                    className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-[#0e716d]/10 flex items-center justify-center">
                                            {icon}
                                        </div>
                                        <span className="text-3xl font-black text-gray-100">
                                            {step}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                                    <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                    {mockup}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FEATURE DEEP-DIVE  (alternating layout)
                ══════════════════════════════════════════ */}
                <section id="features" className="w-full py-16 md:py-24 bg-white">
                    <div className="container px-4 md:px-8 mx-auto max-w-6xl space-y-20">

                        {/* Feature 1 – Summarization */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-5">
                                <SectionLabel>Summarization</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                    Transform lengthy documents into
                                    clear, concise summaries
                                </h2>
                                <p className="text-gray-500 leading-relaxed">
                                    The AI reads your entire document and extracts the most
                                    important ideas, arguments, and findings — so you spend
                                    less time reading and more time understanding.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {[
                                        "Supports PDF, DOCX, and plain text",
                                        "Short, medium & detailed summary modes",
                                        "Saves up to 90% of your reading time",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-[#0e716d] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/login">
                                    <Button className="mt-2 rounded-full bg-[#0e716d] hover:bg-[#0a5a56] text-white gap-2">
                                        Try Summarization <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <AppMockup label="Summary Output">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-2 mb-2">
                                            <FileText className="h-4 w-4 text-[#0e716d]" />
                                            <span className="text-xs font-semibold text-gray-700">
                                                lecture-notes-ch5.pdf
                                            </span>
                                            <Badge className="ml-auto text-[9px] bg-green-100 text-green-700">
                                                Done
                                            </Badge>
                                        </div>
                                        <div className="bg-slate-50 rounded-xl p-4">
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                                                Key Takeaways
                                            </p>
                                            {[
                                                "Chapter 5 introduces the concept of neural networks and gradient descent.",
                                                "Backpropagation is the primary training algorithm discussed.",
                                                "Overfitting is mitigated using dropout layers and regularization.",
                                            ].map((t, i) => (
                                                <div key={i} className="flex gap-2 mb-2">
                                                    <span className="mt-0.5 w-4 h-4 rounded-full bg-[#0e716d]/20 flex items-center justify-center text-[8px] font-bold text-[#0e716d] flex-shrink-0">
                                                        {i + 1}
                                                    </span>
                                                    <p className="text-xs text-gray-600 leading-relaxed">{t}</p>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex gap-2 flex-wrap pt-1">
                                            <span className="text-[10px] bg-[#0e716d]/10 text-[#0e716d] px-2.5 py-1 rounded-full">
                                                Neural Networks
                                            </span>
                                            <span className="text-[10px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
                                                Backpropagation
                                            </span>
                                            <span className="text-[10px] bg-purple-50 text-purple-600 px-2.5 py-1 rounded-full">
                                                Regularization
                                            </span>
                                        </div>
                                    </div>
                                </AppMockup>
                            </div>
                        </div>

                        {/* Feature 2 – Q&A (reversed) */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <AppMockup label="Q&A Chat">
                                    <div className="space-y-3">
                                        {/* User message */}
                                        <div className="flex justify-end">
                                            <div className="bg-[#0e716d] text-white text-xs rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] leading-relaxed">
                                                What is the main argument of Chapter 3?
                                            </div>
                                        </div>
                                        {/* AI response */}
                                        <div className="flex gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#0e716d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Brain className="h-3 w-3 text-[#0e716d]" />
                                            </div>
                                            <div className="bg-gray-50 text-gray-700 text-xs rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] leading-relaxed border border-gray-100">
                                                Chapter 3 argues that climate variability significantly
                                                impacts crop yields, particularly in sub-Saharan Africa,
                                                where a 2°C rise leads to a 15% reduction in output.
                                            </div>
                                        </div>
                                        {/* User */}
                                        <div className="flex justify-end">
                                            <div className="bg-[#0e716d] text-white text-xs rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[80%] leading-relaxed">
                                                Which crops are most affected?
                                            </div>
                                        </div>
                                        {/* AI */}
                                        <div className="flex gap-2">
                                            <div className="w-6 h-6 rounded-full bg-[#0e716d]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <Brain className="h-3 w-3 text-[#0e716d]" />
                                            </div>
                                            <div className="bg-gray-50 text-gray-700 text-xs rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[80%] leading-relaxed border border-gray-100">
                                                Maize, wheat, and sorghum are highlighted as the most
                                                vulnerable staple crops according to the paper.
                                            </div>
                                        </div>
                                        {/* Input bar */}
                                        <div className="mt-2 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3 py-2">
                                            <span className="text-xs text-gray-300 flex-1">Ask anything about your document…</span>
                                            <ArrowRight className="h-3.5 w-3.5 text-[#0e716d]" />
                                        </div>
                                    </div>
                                </AppMockup>
                            </div>
                            <div className="order-1 lg:order-2 space-y-5">
                                <SectionLabel>Intelligent Q&A</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                    Ask questions, get answers — straight from your documents
                                </h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Chat with your document as if you have a personal tutor on
                                    call 24/7. Get accurate, context-grounded answers without
                                    skimming through pages.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {[
                                        "Context-aware, grounded answers",
                                        "Cite exact passages from your document",
                                        "Works like a smart textbook",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-[#0e716d] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/login">
                                    <Button className="mt-2 rounded-full bg-[#0e716d] hover:bg-[#0a5a56] text-white gap-2">
                                        Start Chatting <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>

                        {/* Feature 3 – Concept Map */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-5">
                                <SectionLabel>Visual Concept Maps</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                    See the connections you&apos;ve been missing
                                </h2>
                                <p className="text-gray-500 leading-relaxed">
                                    InfoDigest Pro generates interactive knowledge graphs that
                                    reveal how concepts in your document relate to each other —
                                    making complex material easier to grasp and remember.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {[
                                        "Auto-generated mind maps from any document",
                                        "Interactive, zoomable nodes",
                                        "Great for visual learners",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-[#0e716d] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/login">
                                    <Button className="mt-2 rounded-full bg-[#0e716d] hover:bg-[#0a5a56] text-white gap-2">
                                        Generate a Map <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                <AppMockup label="Concept Map View">
                                    {/* Concept map placeholder using CSS nodes */}
                                    <div className="relative h-52 flex items-center justify-center">
                                        {/* Center node */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0e716d] text-white text-[10px] font-bold px-3 py-2 rounded-xl shadow-lg z-10">
                                            Neural Networks
                                        </div>
                                        {/* Surrounding nodes */}
                                        {[
                                            { label: "Backprop", top: "5%", left: "5%" },
                                            { label: "Gradient Descent", top: "5%", right: "5%" },
                                            { label: "Activation Fn.", bottom: "8%", left: "2%" },
                                            { label: "Overfitting", bottom: "8%", right: "2%" },
                                            { label: "Training Data", top: "38%", left: "-2%" },
                                        ].map(({ label, ...pos }) => (
                                            <div
                                                key={label}
                                                className="absolute bg-white border border-[#0e716d]/30 text-[9px] font-medium text-[#0e716d] px-2.5 py-1.5 rounded-lg shadow-sm"
                                                style={pos}
                                            >
                                                {label}
                                            </div>
                                        ))}
                                        {/* Connector lines (visual only) */}
                                        <div className="absolute inset-0">
                                            <svg width="100%" height="100%" className="opacity-20">
                                                <line x1="50%" y1="50%" x2="18%" y2="12%" stroke="#0e716d" strokeWidth="1.5" />
                                                <line x1="50%" y1="50%" x2="82%" y2="12%" stroke="#0e716d" strokeWidth="1.5" />
                                                <line x1="50%" y1="50%" x2="14%" y2="88%" stroke="#0e716d" strokeWidth="1.5" />
                                                <line x1="50%" y1="50%" x2="86%" y2="88%" stroke="#0e716d" strokeWidth="1.5" />
                                                <line x1="50%" y1="50%" x2="6%" y2="48%" stroke="#0e716d" strokeWidth="1.5" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="text-center text-[10px] text-gray-400 mt-2">
                                        Interactive concept map — click any node to explore
                                    </p>
                                </AppMockup>
                            </div>
                        </div>

                        {/* Feature 4 – Study Guide */}
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <AppMockup label="Study Guide">
                                    <div className="space-y-3">
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                                            Study Guide — Chapter 5
                                        </p>
                                        {/* Key terms */}
                                        <div className="bg-amber-50 rounded-xl p-3">
                                            <p className="text-[10px] font-semibold text-amber-700 mb-1.5">
                                                📌 Key Terms
                                            </p>
                                            {["Neural Network", "Backpropagation", "Regularization"].map(
                                                (term) => (
                                                    <div
                                                        key={term}
                                                        className="flex items-center gap-1.5 text-xs text-gray-600 mb-1"
                                                    >
                                                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                                                        {term}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                        {/* Practice Q */}
                                        <div className="bg-blue-50 rounded-xl p-3">
                                            <p className="text-[10px] font-semibold text-blue-700 mb-1.5">
                                                ❓ Practice Questions
                                            </p>
                                            {[
                                                "What is the vanishing gradient problem?",
                                                "Explain dropout regularization.",
                                            ].map((q, i) => (
                                                <div key={i} className="flex items-start gap-1.5 text-xs text-gray-600 mb-1">
                                                    <span className="font-bold text-blue-500 flex-shrink-0">
                                                        {i + 1}.
                                                    </span>
                                                    {q}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </AppMockup>
                            </div>
                            <div className="order-1 lg:order-2 space-y-5">
                                <SectionLabel>Study Guide Generation</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
                                    Personalized study guides, generated instantly
                                </h2>
                                <p className="text-gray-500 leading-relaxed">
                                    Stop spending hours making flashcards and notes. InfoDigest
                                    Pro reads your material and builds a complete, structured
                                    study guide with key terms, summaries, and practice questions.
                                </p>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    {[
                                        "Key concepts and definitions",
                                        "Auto-generated practice questions",
                                        "Optimized for exam preparation",
                                    ].map((item) => (
                                        <li key={item} className="flex items-center gap-2">
                                            <CheckCircle className="h-4 w-4 text-[#0e716d] flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Link href="/login">
                                    <Button className="mt-2 rounded-full bg-[#0e716d] hover:bg-[#0a5a56] text-white gap-2">
                                        Create Study Guide <ArrowRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    STATS
                ══════════════════════════════════════════ */}
                <section className="w-full py-14 bg-[#0e716d]">
                    <div className="container px-4 md:px-8 mx-auto max-w-5xl">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                            {[
                                { stat: "50K+", label: "Documents Processed" },
                                { stat: "95%", label: "Reading Time Saved" },
                                { stat: "10K+", label: "Active Students" },
                                { stat: "4.9★", label: "Average User Rating" },
                            ].map(({ stat, label }) => (
                                <div key={label}>
                                    <div className="text-4xl font-black mb-1">{stat}</div>
                                    <div className="text-sm text-white/70">{label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FOR WHOM — USE CASES
                ══════════════════════════════════════════ */}
                <section className="w-full py-16 md:py-24 bg-slate-50">
                    <div className="container px-4 md:px-8 mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <SectionLabel>Who It&apos;s For</SectionLabel>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
                                Built for every kind of learner
                            </h2>
                            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
                                Whether you&apos;re cramming for finals or conducting doctoral
                                research, InfoDigest Pro adapts to your workflow.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                {
                                    icon: <GraduationCap className="h-7 w-7 text-[#0e716d]" />,
                                    title: "Students",
                                    desc: "Summarize lecture notes, prep for exams, and understand difficult concepts faster.",
                                    accent: "bg-teal-50",
                                },
                                {
                                    icon: <FlaskConical className="h-7 w-7 text-blue-500" />,
                                    title: "Researchers",
                                    desc: "Quickly analyze papers, extract findings, and map research landscapes.",
                                    accent: "bg-blue-50",
                                },
                                {
                                    icon: <Briefcase className="h-7 w-7 text-purple-500" />,
                                    title: "Professionals",
                                    desc: "Digest reports, policy docs, and industry papers without losing hours.",
                                    accent: "bg-purple-50",
                                },
                                {
                                    icon: <Lightbulb className="h-7 w-7 text-amber-500" />,
                                    title: "Self-Learners",
                                    desc: "Explore any topic deeply: ask questions and build mental models visually.",
                                    accent: "bg-amber-50",
                                },
                            ].map(({ icon, title, desc, accent }) => (
                                <Card
                                    key={title}
                                    className={`border-0 shadow-sm hover:shadow-md transition-shadow ${accent}`}
                                >
                                    <CardContent className="p-6">
                                        <div className="mb-4">{icon}</div>
                                        <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                                        <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    TESTIMONIALS
                ══════════════════════════════════════════ */}
                <section id="testimonials" className="w-full py-16 md:py-24 bg-white">
                    <div className="container px-4 md:px-8 mx-auto max-w-6xl">
                        <div className="text-center mb-12">
                            <SectionLabel>Testimonials</SectionLabel>
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
                                Our users love it — give it a try!
                            </h2>
                            <p className="mt-3 text-gray-500">
                                See how InfoDigest Pro is transforming academic success
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    quote:
                                        "InfoDigest Pro completely changed how I approach research. I can now process dozens of papers in the time it used to take me to read just one!",
                                    name: "Sarah Martinez",
                                    role: "PhD Student, MIT",
                                    initials: "SM",
                                    color: "#0e716d",
                                },
                                {
                                    quote:
                                        "The concept mapping feature is incredible. It helps me visualize complex relationships in my coursework that I never saw before.",
                                    name: "James Chen",
                                    role: "Medical Student, Stanford",
                                    initials: "JC",
                                    color: "#3b82f6",
                                },
                                {
                                    quote:
                                        "As a professor, I use InfoDigest Pro to quickly review student submissions and create better study materials. It's a game-changer for education.",
                                    name: "Dr. Rachel Kim",
                                    role: "Professor, UC Berkeley",
                                    initials: "RK",
                                    color: "#8b5cf6",
                                },
                                {
                                    quote:
                                        "I used to spend entire weekends reading textbooks. Now I upload them, get a crystal-clear summary, and study what actually matters.",
                                    name: "Alex Morgan",
                                    role: "Undergraduate, NYU",
                                    initials: "AM",
                                    color: "#f59e0b",
                                },
                                {
                                    quote:
                                        "The Q&A feature feels like having a brilliant friend who has read everything — it answers exactly what I need from my own documents.",
                                    name: "Tariq Diallo",
                                    role: "Law Student, Harvard",
                                    initials: "TD",
                                    color: "#ec4899",
                                },
                                {
                                    quote:
                                        "Study guide generation alone is worth it. I went from scattered notes to a perfectly structured review sheet in under a minute.",
                                    name: "Priya Nair",
                                    role: "Biology Researcher",
                                    initials: "PN",
                                    color: "#14b8a6",
                                },
                            ].map(({ quote, name, role, initials, color }) => (
                                <Card key={name} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <CardContent className="p-6 flex flex-col h-full">
                                        <div className="flex items-center gap-0.5 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                                />
                                            ))}
                                        </div>
                                        <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                                            &ldquo;{quote}&rdquo;
                                        </p>
                                        <div className="flex items-center gap-3">
                                            <Avatar initials={initials} color={color} />
                                            <div>
                                                <div className="font-semibold text-sm text-gray-900">
                                                    {name}
                                                </div>
                                                <div className="text-xs text-gray-500">{role}</div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    FAQ
                ══════════════════════════════════════════ */}
                <section id="faq" className="w-full py-16 md:py-24 bg-slate-50">
                    <div className="container px-4 md:px-8 mx-auto max-w-4xl">
                        <div className="grid lg:grid-cols-2 gap-12 items-start">
                            <div className="lg:sticky lg:top-24">
                                <SectionLabel>FAQ</SectionLabel>
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-1 mb-4">
                                    Got Questions? We&apos;ve Got Answers!
                                </h2>
                                <p className="text-gray-500 mb-6">
                                    If you have more questions, feel free to{" "}
                                    <Link href="/login" className="text-[#0e716d] underline underline-offset-2">
                                        contact us
                                    </Link>
                                    .
                                </p>
                                <Link href="/login">
                                    <Button className="rounded-full bg-[#0e716d] hover:bg-[#0a5a56] text-white gap-2">
                                        Contact Us <ChevronRight className="h-4 w-4" />
                                    </Button>
                                </Link>
                            </div>
                            <div>
                                {[
                                    {
                                        q: "Is InfoDigest Pro free?",
                                        a: "Yes! InfoDigest Pro is completely free to use. Create an account and start uploading documents right away — no credit card required.",
                                    },
                                    {
                                        q: "What file types are supported?",
                                        a: "We currently support PDF and DOCX file formats, as well as plain text input. Support for more formats is coming soon.",
                                    },
                                    {
                                        q: "How accurate are the AI summaries?",
                                        a: "Our summaries are powered by OpenAI's latest models and are highly accurate for academic and professional content. Results quality depends on the clarity of the source document.",
                                    },
                                    {
                                        q: "Is my data secure?",
                                        a: "Absolutely. Your documents are stored securely in Supabase and are never shared with third parties. You can delete your data at any time.",
                                    },
                                    {
                                        q: "How do I get started?",
                                        a: "Simply click 'Get Started Free', create an account, and upload your first document. The entire setup takes less than two minutes.",
                                    },
                                    {
                                        q: "Does InfoDigest Pro work for any subject?",
                                        a: "Yes! Whether it's biology, law, history, or computer science — our AI handles all academic and professional disciplines effectively.",
                                    },
                                ].map(({ q, a }) => (
                                    <FaqItem key={q} question={q} answer={a} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ══════════════════════════════════════════
                    CTA BANNER
                ══════════════════════════════════════════ */}
                <section className="w-full py-16 md:py-20 bg-gradient-to-br from-[#0e716d] to-[#0a5a56] relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />

                    <div className="container px-4 md:px-8 mx-auto max-w-3xl text-center relative z-10">
                        {/* Avatar stack */}
                        <div className="flex justify-center mb-6">
                            <div className="flex -space-x-3">
                                {[
                                    { i: "SM", c: "#ffffff33" },
                                    { i: "JC", c: "#ffffff22" },
                                    { i: "RK", c: "#ffffff33" },
                                ].map(({ i, c }) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-white/40 flex items-center justify-center text-white text-xs font-bold"
                                        style={{ backgroundColor: c }}
                                    >
                                        {i}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                            Ready to Transform the Way You Study?
                        </h2>
                        <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
                            Go from overwhelmed to in control. Start processing your first
                            document for free — no credit card, no setup.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <Link href="/login">
                                <Button
                                    size="lg"
                                    className="bg-white text-[#0e716d] hover:bg-gray-100 font-semibold rounded-full px-8 shadow-lg"
                                >
                                    Get Started Free
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                            <Link href="#features">
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-white/40 text-white hover:bg-white/10 rounded-full px-8"
                                >
                                    Explore Features
                                </Button>
                            </Link>
                        </div>
                        <div className="flex items-center justify-center gap-6 text-sm text-white/70 mt-6">
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4" />
                                Free forever
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4" />
                                No credit card
                            </span>
                            <span className="flex items-center gap-1.5">
                                <CheckCircle className="h-4 w-4" />
                                Cancel anytime
                            </span>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
