"use client";
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from "@/components/ui/dialog";

interface Question {
    type: QuestionType;
    text: string;
    options?: string[];
}

type QuestionType = 'TrueFalse' | 'Input' | 'MCQ';

interface Survey {
    id: string;
    name: string;
    description: string;
    questions: Question[];
}

function SurveyPage() {
    const searchParams = useSearchParams();
    const getQueryParam = (key: string): string | null => {
        return searchParams.get(key);
    };


    const surveyId = getQueryParam('surveyId');
    console.log(surveyId)


    const [survey, setSurvey] = useState<Survey | null>(null);
    const [responses, setResponses] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        // Ensure surveyId is defined before making the API request
        if (!surveyId) return;

        const fetchSurvey = async () => {
            try {
                const response = await axios.get(`/api/survey/${surveyId}`);
                setSurvey(response.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch survey.");
                setLoading(false);
            }
        };

        fetchSurvey();
    }, [surveyId]);

    const handleInputChange = (questionIndex: number, value: any) => {
        setResponses((prevResponses: any) => ({
            ...prevResponses,
            [questionIndex]: value
        }));
    };

    const handleSubmit = async () => {
        if (!surveyId) {
            setError("Survey ID is missing.");
            return;
        }

        try {
            await axios.post(`/api/survey/${surveyId}/response`, { responses });
            alert("Survey submitted successfully!");
        } catch (err) {
            setError("Failed to submit survey.");
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;

    return (
        <div className="p-8">
            <h1 className="text-2xl font-semibold">{survey?.name}</h1>
            <p className="text-lg mb-4">{survey?.description}</p>

            <div>
                {survey?.questions.map((question, index) => (
                    <div key={index} className="mb-6">
                        <p className="font-bold">{index + 1}. {question.text}</p>
                        {question.type === 'Input' && (
                            <Input
                                type="text"
                                value={responses[index] || ""}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                                placeholder="Your answer"
                                className="mt-2"
                            />
                        )}
                        {question.type === 'TrueFalse' && (
                            <div className="mt-2">
                                <Button
                                    onClick={() => handleInputChange(index, 'True')}
                                    className={`mr-2 ${responses[index] === 'True' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                >
                                    True
                                </Button>
                                <Button
                                    onClick={() => handleInputChange(index, 'False')}
                                    className={`ml-2 ${responses[index] === 'False' ? 'bg-blue-500' : 'bg-gray-300'}`}
                                >
                                    False
                                </Button>
                            </div>
                        )}
                        {question.type === 'MCQ' && (
                            <div className="mt-2">
                                {question.options?.map((option, i) => (
                                    <div key={i}>
                                        <input
                                            type="radio"
                                            name={`question-${index}`}
                                            value={option}
                                            checked={responses[index] === option}
                                            onChange={() => handleInputChange(index, option)}
                                            className="mr-2"
                                        />
                                        <label>{option}</label>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <Button onClick={() => setIsDialogOpen(true)} className="mt-8">Submit Survey</Button>

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Confirmation</DialogTitle>
                    </DialogHeader>
                    <div>
                        <p>Are you sure you want to submit this survey?</p>
                    </div>
                    <DialogFooter>
                        <Button onClick={() => setIsDialogOpen(false)} variant="secondary">Cancel</Button>
                        <Button onClick={handleSubmit}>Submit</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default SurveyPage;
