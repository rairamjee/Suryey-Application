"use client";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import axios from "axios";

interface Form {
    id: string; // Changed to 'id' to match the response data
    name: string; // Changed to 'name' to match the response data
    description: string; // Changed to 'description' to match the response data
    startDate: string; // Added to match the response data
    endDate: string; // Added to match the response data
}

function Allforms() {
    const [allForms, setAllForms] = useState<Form[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/survey');
                
                // Transform the API response to fit the Form interface
                const forms = response.data.data.map((item: any) => ({
                    id: item.surveyId,
                    name: item.surveyName,
                    description: item.surveyDescription,
                    startDate: item.startDate,
                    endDate: item.endDate
                }));
                
                setAllForms(forms);
            } catch (err) {
                setError("Failed to fetch forms.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="w-5/6">
            <h1 className="my-12 text-xl font-semibold">List of the Forms Created</h1>
            <Accordion type="single" collapsible className="w-3/4">
                {allForms.length > 0 ? (
                    allForms.map((form) => (
                        <AccordionItem 
                            key={form.id} 
                            value={form.id}
                            className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2"
                        >
                            <AccordionTrigger>{form.name}</AccordionTrigger>
                            <AccordionContent>
                                <p>{form.description}</p>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                ) : (
                    <p>No forms available.</p>
                )}
            </Accordion>
        </div>
    );
}

export default Allforms;
