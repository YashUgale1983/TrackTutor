'use client'

import MaxWidthWrapper from "./MaxWidthWrapper";
import React, { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
  

const Dashboard = ()=>{

    return (
        <>
        <MaxWidthWrapper className="my-16 text-white">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-3xl">Created courses</div>
                <div>
                    <DialogComp />
                </div>
            </div>
        </MaxWidthWrapper>
        </>
    )
}

const DialogComp = () => {
    const [courseName, setCourseName] = useState('');
    const [courseTopic, setCourseTopic] = useState('');
    const [courseSubtopics, setCourseSubtopics] = useState(['']); // State for multiple subtopics
    const [courseDescription, setCourseDescription] = useState('');

    const handleFormSubmit = (e : any) => {
        e.preventDefault();
        console.log({
            courseName,
            courseTopic,
            courseSubtopics,
            courseDescription
        });
        // You can implement further logic like API calls or state updates here

        

    };

    const handleSubtopicChange = (index : number, value : string) => {
        const newSubtopics = [...courseSubtopics];
        newSubtopics[index] = value;
        setCourseSubtopics(newSubtopics);
    };

    const addSubtopic = () => {
        setCourseSubtopics([...courseSubtopics, '']);
    };
    
    const handleSubtopicClearance = ()=>{
        setCourseSubtopics(['']);
    }

    return (
        <Dialog onOpenChange={handleSubtopicClearance}>
            <DialogTrigger className="bg-white text-black py-2 px-4 rounded-lg">Create new</DialogTrigger>
            <DialogContent className="max-h-screen overflow-y-auto bg-black text-white">
                <DialogHeader>
                    <DialogTitle className="text-2xl">Enter Course Details</DialogTitle>
                    <DialogDescription>
                        Please fill in the details below:
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleFormSubmit} className="mt-2 text-white">
                    <div className="mb-4">
                        <label htmlFor="courseName" className="block text-lg font-medium text-white">Course Name</label>
                        <input
                            type="text"
                            id="courseName"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={courseName}
                            onChange={(e) => setCourseName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="courseTopic" className="block text-lg font-medium text-white">Course Topic</label>
                        <input
                            type="text"
                            id="courseTopic"
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={courseTopic}
                            onChange={(e) => setCourseTopic(e.target.value)}
                            required
                        />
                    </div>

                    {courseSubtopics.map((subtopic, index) => (
                        <div className="mb-4" key={index}>
                            <label htmlFor={`courseSubtopic-${index}`} className="block text-lg font-medium text-white">Course Subtopic {index + 1}</label>
                            <div className="flex">
                                <input
                                    type="text"
                                    id={`courseSubtopic-${index}`}
                                    className="mt-1 p-2 flex-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    value={subtopic}
                                    onChange={(e) => handleSubtopicChange(index, e.target.value)}
                                    required
                                />
                                {index === courseSubtopics.length - 1 && (
                                    <button
                                        type="button"
                                        className="ml-2 bg-gray-200 text-gray-700 py-1 px-3 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                                        onClick={addSubtopic}
                                    >
                                        + Add Subtopic
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                    <div className="mb-4">
                        <label htmlFor="courseDescription" className="block text-lg font-medium text-white">Course Description</label>
                        <textarea
                            id="courseDescription"
                            rows={3}
                            className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            value={courseDescription}
                            onChange={(e) => setCourseDescription(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Create
                        </button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default Dashboard;