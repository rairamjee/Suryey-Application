"use client";
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
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

// interface Survey {
//     id: number;
//     name: string;
//     description: string;
//     questions: Question[];
// }

function SurveyPage() {
    const { id } = useParams();
    const surveyId = Number(id);
    const router=useRouter();

    const [survey, setSurvey] = useState<any | null>(null);
    const [responses, setResponses] = useState<any>({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        if (isNaN(surveyId)) {
            setError("Invalid Survey ID");
            setLoading(false);
            return;
        }

        const fetchSurvey = async () => {
            try {
                const response = await axios.get(`/api/survey/${surveyId}`);
                setSurvey(response.data.data);
                console.log(response.data.data);
                setLoading(false);
            } catch (err) {
                setError("Failed to fetch survey.");
                setLoading(false);
            }
        };

        fetchSurvey();
    }, []);

    console.log(survey);

    const handleInputChange = (questionIndex: number, value: any) => {
        setResponses((prevResponses: any) => ({
            ...prevResponses,
            [questionIndex]: value
        }));
    };

    const handleSubmit = async () => {
        if (isNaN(surveyId)) {
            setError("Survey ID is missing or invalid.");
            return;
        }

        try {
            await axios.post(`/api/survey/${surveyId}/response`, { responses });
            alert("Survey submitted successfully!");
        } catch (err) {
            setError("Failed to submit survey.");
        }
    };

    const newArray = survey?.map((surveyData:any) => {
        console.log(surveyData.questionId)
      });
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p className="text-red-500">{error}</p>;

    // console.log("sjdslfjslf", survey?.questions)
    return (
        <div className="p-8">



            {/* <h1 className="text-2xl font-semibold">{survey?.name}</h1> */}
            {/* <p className="text-lg mb-4">{survey?.description}</p> */}
            
            <div>
                {survey ? (
                    survey.map((question:any,index:any) => (
                        <div key={question.questionId} className="mb-6">
                            <p className="font-bold">{index + 1}. {question.questionName}</p>
                            {question.questionType === 'Input' && (
                                <Input
                                    type="text"
                                    value={responses[index] || ""}
                                    onChange={(e) => handleInputChange(index, e.target.value)}
                                    placeholder="Your answer"
                                    className="mt-2"
                                />
                            )}
                            {question.questionType === 'TrueFalse' && (
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
                            {question.questionType === 'MCQ' && (
                                <div className="mt-2">
                                    {question.questionOption?.map((option:any, i:any) => (
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
                    ))
                ) : (
                    <p>No questions available.</p>
                )}
            </div>

            <Button onClick={() => setIsDialogOpen(true)} className="mt-8">Submit Survey</Button>

            <br/>
            <Button className='mt-12' onClick={()=>{router.push('/dashboard/sidebar')}}>Back</Button>
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
