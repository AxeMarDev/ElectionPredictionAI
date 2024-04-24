'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import NewsPage from "./newsPage";
import VideoEmbed from "./videoEmbed";
// @ts-ignore
import USAMap from "react-usa-map";
import stateColors from "@/app/utility/stateColors";
import stateinfo from "@/app/utility/stateinfo";
import Api from "./utility/API";


export default function Home() {

    const democratPercent = 40; // Example percentage value for Democrat
    const republicanPercent = 60; // Example percentage value for Republican
    const [inStatePolls, setInStatePolls] = useState(false)
    const [pickedState, setPickedState] = useState( "")

    // Retrieve the stateinfo object
    const stateData = stateinfo();
    const ALLstateinfo=stateData;//combine all string data here then give this to AI




    const mapHandler = ( event:any ) => {
        //(event.target.dataset.name);
        setInStatePolls(true)
        setPickedState( event.target.dataset.name)
        return 0;
    };

    const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the collapsible tab

    const toggleTab = () => setIsOpen(!isOpen);

    const buttonColorHandler = () =>{
        setState("bg-red-200")
        console.log("reponse of chat should be here")
    }

    return (
        !inStatePolls ? (
                <div>
                    <div className={"bg-gray-800 w-screen h-screen flex flex-col justify-between"}>
                        <div className={"flex flex-col h-full justify-center grid content-center"} style={{ overflow: 'hidden'}}>
                            <USAMap customize={stateColors()} onClick={mapHandler} />
                        </div>

                        <div className={"w-full pl-10  pr-10 flex justify-between "}>
                            <div className={"flex flex-row"}>
                                <div className={"  rounded bg-white h-14 w-14"} style={{
                                    backgroundImage: 'url(https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?w=1536)',
                                    backgroundSize: "cover"
                                }}/>
                                <p className={"grid content-center pl-5" }>Joseph Robinette Biden</p>
                            </div>
                            <div className={"flex flex-row"}>
                                <p className={"grid content-center pr-5"} >Donald John Trump</p>
                                <div className={"rounded bg-white h-14 w-14"} style={{
                                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg)',
                                    backgroundSize: "cover"
                                }}/>
                            </div>

                        </div>
                        <div className="mx-auto mt-1 mb-6 w-4 rounded-md" style={{ width: '95vw' }}>
                            <div className="flex h-10 bg-gray-200 rounded-md  overflow-hidden my-4">
                                <div
                                    style={{ width: `${democratPercent}%` }}
                                    className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                                >
                                    {democratPercent}%
                                </div>
                                <div
                                    style={{ width: `${republicanPercent}%` }}
                                    className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
                                >
                                    {republicanPercent}%
                                </div>
                            </div>
                        </div>
                        <div>
                            <ScrapeComponent/>
                        </div>
                    </div>
                    <div className={`absolute bottom-0 w-full ${isOpen ? 'h-full' : 'h-10'} transition-height overflow-hidden duration-500 ease-in-out`}>
                        <div className="bg-gray-900/80 text-white cursor-pointer p-2 text-center" onClick={toggleTab}>
                            {isOpen ? '🡫' : '🡩'}
                        </div>
                        {isOpen && (
                            <div className="bg-gray-800/90 w-screen h-screen flex flex-col justify-between">
                                {/* Container for videos and news */}
                                <div className="flex-col md:flex-col flex-auto">
                                    {/* Container for videos */}
                                    <div className="md:flex-1 justify-center h-2/6">
                                        <h2 className="text-lg font-bold p-6">Live News</h2>
                                        {/* Embedded YouTube video and other content */}
                                        <div className="flex justify-between space-x-10">
                                            <div className="flex-1 aspect-w-16 aspect-h-4">
                                                <VideoEmbed videoId = "YDfiTGGPYCk"/>
                                            </div>
                                            <div className="flex-1 aspect-w-16 aspect-h-4">
                                                <VideoEmbed videoId = "YDfiTGGPYCk"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Container for news */}
                                    <div className="md:flex-1 overflow-hidden mt-44">
                                        <h2 className="text-lg font-bold p-2">Latest News</h2>
                                        {/* Placeholder for news content */}
                                        <div className="p-4">
                                            <p>Here is some news content...</p>
                                            {/* Additional news items */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ):(
                <div>
                    <button  onClick={()=>setInStatePolls(false)} > go back</button>
                    <p>{pickedState}</p>
                </div>
            )

  );
}












