"use client"

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const questions = [
    {
        question: "Is Tally really free?",
        answer:
            "Yes! Born out of frustration with expensive form builders, Tally offers unlimited forms and submissions for free within our fair use guidelines. You can get started right away and create forms using advanced features like conditional logic, signatures, calculations, file uploads, and many more — all for free and without time restrictions.",
    },
    {
        question: "Are Tally forms secure?",
        answer:
            "Yes, Tally takes security seriously. As a Belgium-based (EU) company, we fully comply with GDPR requirements and store all form data in Europe. Your data is encrypted both in transit and at rest, and we provide you complete control over the information you collect. For enterprise needs, Tally Business allows you to control submissions data retention.",
    },
    {
        question: "How does Tally compare to other form builders?",
        answer:
            "Unlike most form builders that limit submissions or restrict advanced features to premium plans, Tally offers unlimited forms and submissions for free. Our intuitive interface and powerful features like conditional logic, signatures, and password protection are available without paywalls. For detailed comparisons with specific form builders like Typeform, Jotform, Paperform, and others, take a look at out our comparison guides.",
    },
    {
        question: "How can I get started?",
        answer:
            "You can start creating your first form right away—no sign up needed! Create your first form here or head over to our signup page to create your account. For tips and best practices, check out our Get started guide.",
    },
];

const QnaSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="mt-32 flex flex-col items-center gap-y-10 px-4 sm:px-10 md:px-20 lg:px-[120px]">
            <div className="sm:w-[600px] md:w-[700px] w-[300px]">
                <h1 className="text-black font-extrabold sm:text-3xl text-lg">
                    Questions & answers
                </h1>
            </div>
            <div className="sm:w-[600px] md:w-[700px] w-[300px] mt-2">
                {questions.map((q, i) => (
                    <div key={i} className="w-full border-t border-gray-300">
                        <button
                            onClick={() => toggleAnswer(i)}
                            className="w-full flex justify-between items-center text-left p-4 cursor-pointer"
                        >
                            <p className="font-bold text-black text-sm">{q.question}</p>
                            {openIndex === i ? (
                                <ChevronDown className="text-black transition-transform rotate-180" />
                            ) : (
                                <ArrowRight className="text-black" />
                            )}
                        </button>
                        {openIndex === i && (
                            <div className="p-4 text-sm text-gray-700 border-t border-gray-200 bg-gray-50">
                                {q.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default QnaSection;
