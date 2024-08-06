"use client"
import { useState } from 'react';
import { Home, User, Settings, ChartPie } from 'lucide-react';

// Dummy state to simulate user roles
const userRole = 'admin'; // Change to 'user' to simulate a regular user

function Sidebar() {
    const [activePage, setActivePage] = useState('Dashboard');

    // Function to render content based on the active page
    const renderContent = () => {
        // Replace with actual content rendering
        return <div>Content for {activePage}</div>;
    };

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="bg-slate-900 w-64 h-full text-white fixed top-0 left-0 flex flex-col">
                <div className="flex items-center p-4">
                    <img src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Logo" className="h-8 w-8" />
                    <h3 className="ml-4 text-xl">SaleSkip!</h3>
                </div>
                <div className="flex-1 px-4 py-6">
                    {userRole === 'admin' ? (
                        <>
                            <div 
                                className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activePage === 'Create Survey' ? 'text-slate-50 bg-slate-700' : 'text-slate-400'}`} 
                                onClick={() => setActivePage('Create Survey')}
                            >
                                <Home className="h-4 w-4 mr-3" />
                                <span>Create Survey</span>
                            </div>
                            <div 
                                className={`flex items-center mb-4 cursor-pointer rounded-lg hover:bg-slate-700 p-2 hover:text-slate-50 ${activePage === 'All Surveys' ? 'text-slate-50 bg-slate-700' : 'text-slate-400'}`} 
                                onClick={() => setActivePage('All Surveys')}
                            >
                                <ChartPie className="h-4 w-4 mr-3" />
                                <span>All Surveys</span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activePage === 'Survey Stats' ? 'text-slate-50 bg-slate-700' : 'text-slate-400'}`} 
                                onClick={() => setActivePage('Survey Stats')}
                            >
                                <Home className="h-4 w-4 mr-3" />
                                <span>Survey Stats</span>
                            </div>
                            <div className={`flex items-center mb-4 cursor-pointer p-2 rounded-lg hover:bg-slate-700 hover:text-slate-50 ${activePage === 'Answered Surveys' ? 'text-slate-50 bg-slate-700' : 'text-slate-400'}`} 
                                onClick={() => setActivePage('Answered Surveys')}
                            >
                                <ChartPie className="h-4 w-4 mr-3" />
                                <span>Answered Surveys</span>
                            </div>
                        </>
                    )}
                    <div className="flex items-center mb-4 text-slate-400 cursor-pointer hover:bg-slate-700 hover:text-slate-50 p-2 rounded-lg">
                        <User className="h-4 w-4 mr-3" />
                        <span>Contact</span>
                    </div>
                    <div className="flex items-center cursor-pointer text-slate-400 hover:bg-slate-700 p-2 hover:text-slate-50 rounded-lg">
                        <Settings className="h-4 w-4 mr-3" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="ml-64 w-full h-full p-8 bg-gray-100">
                {renderContent()}
            </div>
        </div>
    );
}

export default Sidebar;
