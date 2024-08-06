import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function Allforms() {
    return (
        <div className="w-5/6">
            <Accordion type="single" collapsible className="w-3/4">
                <AccordionItem value="item-1" className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1" className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-1" className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Allforms;