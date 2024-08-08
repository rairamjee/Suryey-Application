"use client";
import { useEffect, useState } from 'react';
import { CirclePlus, ClipboardList, FileText, CheckCircle } from 'lucide-react';
import AllForms from './allForm/page'; // Adjusted path if needed
import CreateForm from './createForms/page'; // Adjusted path if needed
import AvailableForms from './availableForms/page'; // Adjusted path if needed
import Filledforms from './filledForm/page'; // Adjusted path if needed
import RespondForm from './response/[id]/page';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { format } from 'date-fns';

function Sidebar() {
    // Assume this role is fetched or passed as a prop
    const [role, setRole] = useState<'admin' | 'user'>('admin'); // Change this to 'user' for normal users
    const [activeView, setActiveView] = useState<'all' | 'create' | 'available' | 'filled'>('all');
    const [formattedDate, setFormattedDate] = useState<string>('');
    useEffect(() => {
        const today = new Date();
        const formatted = format(today, "EEEE, MMMM d, yyyy");
        setFormattedDate(formatted);
    }, []);

    return (
        <div className="flex p-8 bg-slate-100 min-h-screen">
            <div className="bg-slate-900 w-1/6 h-screen text-white fixed top-0 left-0">
                <div className="rounded-full p-4 flex flex-col items-start">
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" className="h-8 w-8" />
                    <h3 className="mt-4 text-xl">Questify!</h3>
                </div>
                <div className="px-4 my-6">
                    {role === 'admin' ? (
                        <>
                            <div
                                className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activeView === 'all' ? 'bg-slate-700 text-slate-50' : ''}`}
                                onClick={() => setActiveView('all')}
                            >
                                <ClipboardList className="h-4 w-4 mr-8" />
                                <span>All Forms</span>
                            </div>
                            <div
                                className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activeView === 'create' ? 'bg-slate-700 text-slate-50' : ''}`}
                                onClick={() => setActiveView('create')}
                            >
                                <CirclePlus className="h-4 w-4 mr-8" />
                                <span>Create Form</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div
                                className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activeView === 'available' ? 'bg-slate-700 text-slate-50' : ''}`}
                                onClick={() => setActiveView('available')}
                            >
                                <FileText className="h-4 w-4 mr-8" />
                                <span>Available Forms</span>
                            </div>
                            <div
                                className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activeView === 'filled' ? 'bg-slate-700 text-slate-50' : ''}`}
                                onClick={() => setActiveView('filled')}
                            >
                                <CheckCircle className="h-4 w-4 mr-8" />
                                <span>Filled Forms</span>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div className='ml-[16.6667%] w-5/6'>
                <h1 className="h-16 text-3xl text-slate-900">
                    {role === 'admin' ? (
                        activeView === 'all' ? 'All Forms' : 'Create Form'
                    ) : (
                        activeView === 'available' ? 'Available Forms' : 'Filled Forms'
                    )}
                </h1>
                <div className="flex justify-between">
                    <div>
                        <h1 className="py-4 h-4 text-2xl text-blue-950 mb-4"> Welcome {role === 'admin' ? 'Admin' : 'User'}</h1>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger className="py-4 font-bold">Questify!</TooltipTrigger>
                                <TooltipContent>
                                    <p>{role === 'admin' ? 'Admin' : 'User'}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </div>
                    <div className="my-auto border-y border-gray-950 hover:bg-slate-950 hover:text-white hover:rounded-md p-2">
                        Date: {formattedDate}
                    </div>
                </div>

                {/* Conditional Rendering */}
                {role === 'admin' ? (
                    activeView === 'all' ? (
                        <div className='flex justify-start'>
                            <AllForms />
                        </div>
                    ) : (
                        <div className='flex justify-start'>
                            <CreateForm />
                        </div>
                    )
                ) : (
                    activeView === 'available' ? (
                        <div className='flex justify-start'>
                            <AvailableForms />
                        </div>
                    ) : (
                        <div className='flex justify-start'>
                            {/* <Filledforms /> */}
                            <RespondForm/>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default Sidebar;
