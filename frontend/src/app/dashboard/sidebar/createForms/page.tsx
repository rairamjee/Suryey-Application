"use client"
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import axios from 'axios';

interface Form {
    name: string;
    description: string;
    questions: Question[];
}

interface Question {
    type: QuestionType;
    text: string;
    options?: string[];
}

type QuestionType = 'TrueFalse' | 'Input' | 'MCQ';

function CreateForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [forms, setForms] = useState<Form[]>([]);
    const [error, setError] = useState<string | null>(null);

    // States for question management
    const [isTypeSelectionOpen, setIsTypeSelectionOpen] = useState(false);
    const [selectedQuestionType, setSelectedQuestionType] = useState<QuestionType | null>(null);
    const [questionText, setQuestionText] = useState("");
    const [questionOptions, setQuestionOptions] = useState<string[]>([]);
    const [newOption, setNewOption] = useState("");

    const handleCreateForm = () => {
        if (!formName || !formDescription) {
            setError("Both name and description are required.");
            return;
        }

        const newForm: Form = { name: formName, description: formDescription, questions: [] };
        setForms([...forms, newForm]);

        setFormName("");
        setFormDescription("");
        setIsModalOpen(false);
        setError(null);
    };

    const handleAddQuestion = () => {
        setIsTypeSelectionOpen(true);
    };

    const handleQuestionTypeSelect = (type: QuestionType) => {
        setSelectedQuestionType(type);
        setIsTypeSelectionOpen(false);
    };

    const handleQuestionSubmit = () => {
        if (!questionText) {
            setError("Question text is required.");
            return;
        }

        const newQuestion: Question = {
            type: selectedQuestionType!,
            text: questionText,
            options: selectedQuestionType === 'MCQ' ? questionOptions : undefined
        };

        // Add the new question to the most recent form (for simplicity)
        const updatedForms = [...forms];
        if (updatedForms.length > 0) {
            updatedForms[updatedForms.length - 1].questions.push(newQuestion);
            setForms(updatedForms);
        }

        setQuestionText("");
        setQuestionOptions([]);
        setNewOption("");
        setSelectedQuestionType(null);
    };

    const handleAddOption = () => {
        if (newOption) {
            setQuestionOptions([...questionOptions, newOption]);
            setNewOption("");
        }
    };

    const handleSubmitForm = () => {
        if (forms.length === 0) {
            setError("No forms available to submit.");
            return;
        }
        try {
            // const {data:{data,message}}= await axios.post(''),{
            //     surveyName:
            // }
        } catch (error) {
            
        }
        // Handle form submission logic here
        console.log("Forms submitted:", forms);

        // Optionally clear forms or handle post-submission logic
        setForms([]);
    };

    return (
        <div className="flex p-8 bg-slate-100 min-h-screen w-full">
            <div className="w-full">
                <div>
                    <h3 className='mb-4 text-slate-900 text-2xl mt-8 font-bold'>Create a Form</h3>
                    <Button onClick={() => setIsModalOpen(true)}>Create Form</Button>
                </div>

                <div className="mt-8">
                    {forms.length > 0 ? (
                        forms.map((form, index) => (
                            <div key={index} className="mb-8">
                                <div className="p-4 mb-4 bg-slate-950 rounded shadow text-white">
                                    <h4 className="text-2xl font-semibold">{form.name}</h4>
                                    <p className='text-sm'>{form.description}</p>
                                    <Button className='mt-8 bg-white text-slate-950 hover:bg-slate-100' onClick={handleAddQuestion}>Add Question</Button>
                                </div>
                                <div className="p-4 bg-white rounded shadow">
                                    <h5 className="text-xl font-semibold mb-4">Questions</h5>
                                    {form.questions.length > 0 ? (
                                        form.questions.map((question, qIndex) => (
                                            <div key={qIndex} className="mb-4 p-4 border border-slate-300 rounded">
                                                <p className="font-bold text-lg">Q{qIndex + 1}: {question.text}</p>
                                                {question.type === 'MCQ' && (
                                                    <ul className="mt-2 list-disc pl-5">
                                                        {question.options?.map((option, oIndex) => (
                                                            <li key={oIndex} className="text-sm">{option}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        ))
                                    ) : (
                                        <p>No questions added yet.</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No forms created yet.</p>
                    )}
                </div>

                {forms.length > 0 && (
                    <Button onClick={handleSubmitForm} className="mt-8">Submit Form</Button>
                )}

                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a New Form</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            {error && (
                                <div className="text-red-500 mb-4">
                                    {error}
                                </div>
                            )}
                            <Input
                                value={formName}
                                onChange={(e) => setFormName(e.target.value)}
                                placeholder="Enter Form Name"
                            />
                            <Input
                                value={formDescription}
                                onChange={(e) => setFormDescription(e.target.value)}
                                placeholder="Enter Form Description"
                            />
                        </div>
                        <DialogFooter>
                            <Button onClick={() => setIsModalOpen(false)} variant="secondary">Cancel</Button>
                            <Button onClick={handleCreateForm}>Create Form</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog open={isTypeSelectionOpen} onOpenChange={setIsTypeSelectionOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Select Question Type</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            <Button onClick={() => handleQuestionTypeSelect('TrueFalse')} className='ml-4'>True/False</Button>
                            <Button onClick={() => handleQuestionTypeSelect('Input')} className='ml-4'>Input</Button>
                            <Button onClick={() => handleQuestionTypeSelect('MCQ')} className='ml-4'>MCQ</Button>
                        </div>
                        <DialogFooter>
                            <Button onClick={() => setIsTypeSelectionOpen(false)} variant="secondary">Cancel</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Dialog open={selectedQuestionType !== null} onOpenChange={() => setSelectedQuestionType(null)}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Enter Question Details</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                            {error && (
                                <div className="text-red-500 mb-4">
                                    {error}
                                </div>
                            )}
                            <Input
                                value={questionText}
                                onChange={(e) => setQuestionText(e.target.value)}
                                placeholder="Enter Question Text"
                            />
                            {selectedQuestionType === 'MCQ' && (
                                <div>
                                    <Input
                                        value={newOption}
                                        onChange={(e) => setNewOption(e.target.value)}
                                        placeholder="Enter Option"
                                    />
                                    <Button onClick={handleAddOption} className='mt-2'>Add Option</Button>
                                    <ul className="mt-2">
                                        {questionOptions.map((option, index) => (
                                            <li key={index} className="text-sm">{option}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                        <DialogFooter>
                            <Button onClick={() => setSelectedQuestionType(null)} variant="secondary">Cancel</Button>
                            <Button onClick={handleQuestionSubmit}>Submit Question</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}

export default CreateForm;
