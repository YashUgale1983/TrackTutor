'use client'

import MaxWidthWrapper from "./MaxWidthWrapper";
import ShinyButton from "@/components/magicui/shiny-button";
import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Dashboard = ()=>{

    const handleCreateNew =()=>{
        // handle new course creation logic
    }

    return (
        <>
        <MaxWidthWrapper className="my-16 text-white">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-3xl">Created courses</div>
                <div onClick={handleCreateNew}>
                    <ShinyButton text="Create new"/>
                </div>
            </div>
        </MaxWidthWrapper>
        </>
    )
}

export default Dashboard;