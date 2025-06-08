import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
} from "lucide-react";

export const metadata = {
  title: "InfoDigest Pro",
  description: "InfoDigest.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-white">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-[#0e716d]/10 text-[#0e716d] hover:bg-[#0e716d]/20">
                    AI-Powered Academic Assistant
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl text-gray-900">
                    Overcome Information
                    <span className="text-[#0e716d] block">
                      Overload with AI
                    </span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-[600px]">
                    Transform how you study and research. Upload documents, get
                    instant summaries, ask questions, and create visual study
                    guides—all powered by advanced AI.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-[#0e716d] hover:bg-[#0e716d]/90 text-white px-8"
                  >
                    Start Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-gray-300 text-gray-700"
                  >
                    Watch Demo
                  </Button>
                </div>

                <div className="flex items-center gap-8 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#0e716d]" />
                    <span>No credit card required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-[#0e716d]" />
                    <span>14-day free trial</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <FileText className="h-5 w-5 text-[#0e716d]" />
                      <span className="text-sm font-medium">
                        research-paper.pdf uploaded
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-[#0e716d]/20 rounded-full">
                        <div className="h-2 bg-[#0e716d] rounded-full w-3/4"></div>
                      </div>
                      <p className="text-xs text-gray-500">
                        Extracting file for summary and concept map...
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">
                        AI Summary Generated
                      </h4>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        This paper explores machine learning applications in
                        healthcare, focusing on diagnostic accuracy improvements
                        and patient outcome predictions...
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#0e716d]/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-white border-b border-gray-100">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-[#0e716d]">50K+</div>
                <div className="text-sm text-gray-600">Documents Processed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0e716d]">95%</div>
                <div className="text-sm text-gray-600">Time Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0e716d]">10K+</div>
                <div className="text-sm text-gray-600">Active Students</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0e716d]">4.9/5</div>
                <div className="text-sm text-gray-600">User Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-16 md:py-24 bg-slate-50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-[#0e716d]/10 text-[#0e716d]">
                Powerful Features
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Everything you need to excel academically
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Our AI-powered tools are designed specifically for students,
                researchers, and educators who want to learn more efficiently
                and effectively.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              <Card className="border-0  hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0e716d]/10 flex items-center justify-center">
                      <FileText className="h-6 w-6 text-[#0e716d]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      📄 Smart Summarization
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Upload PDFs, research papers, or lecture notes and get
                    concise, accurate summaries instantly. Perfect for quickly
                    understanding complex academic content.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#0e716d]">
                    <Clock className="h-4 w-4" />
                    <span>Save 90% of reading time</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0  hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0e716d]/10 flex items-center justify-center">
                      <MessageCircleQuestion className="h-6 w-6 text-[#0e716d]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      💬 Intelligent Q&A
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Ask questions directly about your documents and get
                    accurate, context-aware answers. It's like having a personal
                    tutor available 24/7.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#0e716d]">
                    <Zap className="h-4 w-4" />
                    <span>Instant accurate responses</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0  hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0e716d]/10 flex items-center justify-center">
                      <Brain className="h-6 w-6 text-[#0e716d]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      🧠 Visual Concept Maps
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Transform complex topics into clear, visual mind maps. See
                    connections between concepts and understand relationships in
                    your study material.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#0e716d]">
                    <Brain className="h-4 w-4" />
                    <span>Enhanced comprehension</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0  hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-[#0e716d]/10 flex items-center justify-center">
                      <BookOpen className="h-6 w-6 text-[#0e716d]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      📓 Personalized Study Guides
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Automatically generate structured, personalized study guides
                    from your content. Tailored to your learning style and
                    academic goals.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-[#0e716d]">
                    <Users className="h-4 w-4" />
                    <span>Customized for you</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-[#0e716d]/10 text-[#0e716d]">
                Student Success
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
                Loved by students worldwide
              </h2>
              <p className="text-xl text-gray-600">
                See how InfoDigest Pro is transforming academic success
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "InfoDigest Pro completely changed how I approach research.
                    I can now process dozens of papers in the time it used to
                    take me to read just one!"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0e716d]/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#0e716d]">
                        SM
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Sarah Martinez
                      </div>
                      <div className="text-xs text-gray-500">
                        PhD Student, MIT
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "The concept mapping feature is incredible. It helps me
                    visualize complex relationships in my coursework that I
                    never saw before."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0e716d]/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#0e716d]">
                        JC
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">James Chen</div>
                      <div className="text-xs text-gray-500">
                        Medical Student, Stanford
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">
                    "As a professor, I use InfoDigest Pro to quickly review
                    student submissions and create better study materials. It's
                    a game-changer for education."
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#0e716d]/10 flex items-center justify-center">
                      <span className="text-sm font-semibold text-[#0e716d]">
                        DR
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        Dr. Rachel Kim
                      </div>
                      <div className="text-xs text-gray-500">
                        Professor, UC Berkeley
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-r from-[#0e716d] to-[#0e716d]/90">
          <div className="container px-4 md:px-6 mx-auto text-center">
            <div className="space-y-8 max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                Ready to transform your academic workflow?
              </h2>
              <p className="text-xl text-white/90">
                Join thousands of students and researchers who are already
                studying smarter, not harder.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white border-0 text-gray-900 placeholder:text-gray-500"
                  />
                  <Button
                    size="lg"
                    className="bg-white text-[#0e716d] hover:bg-gray-100 font-semibold"
                  >
                    Start Free Trial
                  </Button>
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 text-sm text-white/80">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
