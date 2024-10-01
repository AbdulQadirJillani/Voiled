"use client"

import Heading2 from "./Heading2"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const data = [
  {
    question: "Lorem ipsum dolor sit amet.1",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sit in doloribus inventore laborum voluptatum."
  },
  {
    question: "Lorem ipsum dolor sit amet.2",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sit in doloribus inventore laborum voluptatum."
  },
  {
    question: "Lorem ipsum dolor sit amet.3",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sit in doloribus inventore laborum voluptatum."
  },
  {
    question: "Lorem ipsum dolor sit amet.4",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sit in doloribus inventore laborum voluptatum."
  },
  {
    question: "Lorem ipsum dolor sit amet.5",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam, sit in doloribus inventore laborum voluptatum."
  }
]

function Questions() {
  return (
    <div className="grid bg-fill border border-stroke rounded-md">
      <div className="border border-stroke px-8 md:px-10 py-4 rounded-t-md">
        <Heading2 className="">
          Questions..? We have some answers.
        </Heading2>
      </div>

      <div className="border border-stroke px-6 md:px-10 py-10 rounded-b-md">
        <Accordion type="multiple">
          {
            data.map(({question, answer}, i) => (
              <AccordionItem value={`item-${i+1}`} key={i} className="border-0 my-2 bg-stroke text-text rounded-lg">
                <AccordionTrigger className="px-3 md:px-5">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="px-3 md:px-5">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))
          }
        </Accordion>
      </div>
  </div>
  )
}

export default Questions