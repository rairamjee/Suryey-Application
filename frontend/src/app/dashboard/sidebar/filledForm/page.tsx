import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function Filledforms() {
    return (
        <div className="w-5/6">

            {/* this is just a component it is to updated once the form fillup status is completed  */}
            <h1 className="my-12 text-xl font-semibold">Filled Forms</h1>
            <Accordion type="single" collapsible className="w-3/4">
                <AccordionItem value="item-1" className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}

export default Filledforms;