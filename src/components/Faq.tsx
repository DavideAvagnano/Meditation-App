import { useEffect, useState } from "react";
import faqData from "../assets/faq.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Faq {
  question: string;
  answer: string;
}

const Faq = () => {
  const [faq, setFaq] = useState<Faq[]>([]);

  // simulating fetch API
  useEffect(() => {
    try {
      setFaq(faqData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div className="bg-dark pb-10">
        <div className="max-w-screen-xl mx-auto px-4 py-20 md:px-10">
          <h3 className="font-semibold text-2xl text-center text-primary mb-20">
            Frequently Asked Questions
          </h3>

          <Accordion
            type="single"
            collapsible
            className="w-full max-w-screen-md mx-auto"
          >
            {faq.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
