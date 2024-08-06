"use client"
import { useState } from 'react';
import { CirclePlus, ClipboardList } from 'lucide-react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

interface Form {
    name: string;
    description: string;
}

function CreateForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [forms, setForms] = useState<Form[]>([]); // State to store created forms

    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long'
    });

    const handleCreateForm = () => {
        // Add the new form to the forms array
        const newForm = { name: formName, description: formDescription };
        setForms([...forms, newForm]);

        // Reset the form fields
        setFormName("");
        setFormDescription("");

        // Close the modal
        setIsModalOpen(false);
    };

    return (
        <div className="flex p-8 bg-slate-100 min-h-screen">
            <div className="bg-slate-900 w-1/6 h-screen text-white fixed top-0 left-0">
                <div className="rounded-full p-4 flex flex-col items-start">
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" className="h-8 w-8" />
                    <h3 className="mt-4 text-xl">Questify!</h3>
                </div>
                <div className="px-4 my-6">
                    <div
                        className={"flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700  hover:text-slate-50"}
                    >
                        <ClipboardList className="h-4 w-4 mr-8" />
                        <span>All Forms</span>
                    </div>
                    <div
                        className={"flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700  hover:text-slate-50"}
                        onClick={() => setIsModalOpen(true)} // Open the modal when clicked
                    >
                        <CirclePlus className="h-4 w-4 mr-8" />
                        <span>Create Form</span>
                    </div>
                </div>
            </div>
            <div className='ml-[16.6667%] w-screen'>
                <h1 className="h-16 text-3xl text-slate-900">All Forms</h1>
                <div className="flex justify-between">
                    <div>
                        <h1 className="py-4 h-4 text-2xl text-blue-950 mb-8"> Welcome Admin <br /><span className="text-lg">List Of Forms Created</span></h1>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="py-4 font-bold">Questify!</TooltipTrigger>
                                <TooltipContent>
                                    <p>Admin</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="my-auto border-y border-gray-950 hover:bg-slate-950 hover:text-white hover:rounded-md p-2">
                        Date: {formattedDate}
                    </div>
                </div>

                <div>
                    <h3 className='mb-4 text-slate-900 text-2xl mt-8 font-bold'>Create a Form</h3>
                    {/* Button to open the modal */}
                    <Button onClick={() => setIsModalOpen(true)}>Create Form</Button>
                </div>

                {/* Display created forms */}
                <div className="mt-8">
                    {forms.length > 0 ? (
                        forms.map((form, index) => (
                            <div key={index} className="p-4 mb-4 bg-white rounded shadow">
                                <h4 className="text-lg font-bold">{form.name}</h4>
                                <p>{form.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No forms created yet.</p>
                    )}
                </div>

                {/* Modal for form creation */}
                <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a New Form</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
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
            </div>
        </div>
    );
}

export default CreateForm;
