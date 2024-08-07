"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignupPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userMail, setUserMail] = useState('');
    const [designation, setDesignation] = useState('');
    const [error, setError] = useState('');

    // Handle form submission
    const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement signup logic here (e.g., API call)
        // On success:
        router.push('/login'); // Redirect to login page
    };

    return (
        <div className="h-screen w-screen flex items-center justify-center bg-slate-900">
            {/* Left side for signup form */}
            <div className="left-side w-full lg:w-1/2 md:w-2/3 h-screen ml-4 md:ml-8 lg:ml-12 xl:ml-16 flex flex-col items-start justify-center text-slate-50 p-8">
                <h2 className="text-4xl font-bold mb-4">Questify!</h2>
                <h3 className="mb-8 text-lg">Join us to get started...</h3>
                <form className="w-full max-w-sm" onSubmit={handleSignup}>
                    <div className="mb-6">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="userMail">
                            User Mail
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                            id="userMail"
                            type="email"
                            placeholder="User Mail"
                            value={userMail}
                            onChange={(e) => setUserMail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="designation">
                            Designation
                        </label>
                        <select
                            id="designation"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 leading-tight focus:outline-none focus:shadow-outline"
                            value={designation}
                            onChange={(e) => setDesignation(e.target.value)}
                            required
                        >
                            <option value="" disabled>Select Designation</option>
                            <option value="Software Engineer">Software Engineer</option>
                            <option value="Data Analyst">Data Analyst</option>
                            <option value="HR">HR</option>
                        </select>
                    </div>
                    <div className="mb-8">
                        <label className="block text-slate-300 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="Create a Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:bg-indigo-700"
                            type="submit"
                        >
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className="mt-4 text-center">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            </div>

            {/* Right side for illustration */}
            <div className="right-side hidden md:flex lg:flex w-1/2 h-screen items-center justify-start p-8">
                <img src="/signup.avif" alt="Signup Illustration" className="w-3/5 h-3/5" />
            </div>
        </div>
    );
}

export default SignupPage;
