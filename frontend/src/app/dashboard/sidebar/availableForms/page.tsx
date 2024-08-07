"use client";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

interface Form {
    id: string;
    name: string;
    description: string;
    startDate: string;  // Date in ISO 8601 format
    endDate: string;    // Date in ISO 8601 format
}

function AvailableForms() {
    const [allForms, setAllForms] = useState<Form[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/survey');
                const forms = response.data.data.map((item: any) => ({
                    id: item.surveyId,
                    name: item.surveyName,
                    description: item.surveyDescription,
                    startDate: item.startDate,
                    endDate: item.endDate
                }));
                
                setAllForms(forms);
                console.log("API Response:", forms);
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

    const currentDate = new Date();

    const filteredForms = allForms.filter(form => {
        const startDate = new Date(form.startDate);
        const endDate = new Date(form.endDate);

        return currentDate >= startDate && currentDate <= endDate;
    });

    const handleFormClick = (formId: string) => {
        router.push(`/api/survey/${formId}`);
    };

    return (
        <div className="w-5/6">
            <h1 className="my-12 text-xl font-semibold">List of the Forms Created</h1>
            <Accordion type="single" collapsible className="w-3/4">
                {filteredForms.length > 0 ? (
                    filteredForms.map((form) => (
                        <AccordionItem
                            key={form.id}
                            value={form.id}
                            className="hover:bg-slate-200 bg-slate-950 hover:text-slate-950 text-white px-8 rounded-md mb-2"
                        >
                            <AccordionTrigger>{form.name}</AccordionTrigger>
                            <AccordionContent>
                                <p>{form.description}</p>
                                <button
                                    onClick={() => handleFormClick(form.id)}
                                    className="mt-4 px-4 py-2 bg-slate-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    Fill Out Form
                                </button>
                            </AccordionContent>
                        </AccordionItem>
                    ))
                ) : (
                    <p>No forms available for the current date.</p>
                )}
            </Accordion>
        </div>
    );
}

export default AvailableForms;
