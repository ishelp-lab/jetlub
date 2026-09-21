import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export const FAQItem = ({ question, answer, index }: { question: string, answer: string, index: number }) => {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev => 
          prev.includes(index) 
            ? prev.filter(item => item !== index)
            : [...prev, index]
        );
    };

    return (
        <div
            className="bg-muted rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl mb-4"
        >
            <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 md:px-8 py-4 md:py-6 text-left flex items-center justify-between focus:outline-none rounded-2xl"
              >
                <h3 className="text-lg font-bold text-primary pr-4">
                  {question}
                </h3>
                <div className="flex-shrink-0">
                  <ChevronDownIcon
                    className={`w-6 h-6 text-primary transition-transform duration-300 ${
                        openItems.includes(index) ? 'rotate-180' : ''
                    }`}
                  />
                </div>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index)
                    ? 'max-h-full opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 md:px-8 pb-4 md:pb-6">
                  <div className="border-t border-chart-4 pt-4">
                    <p className="text-foreground leading-relaxed">
                      {answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
    )
}