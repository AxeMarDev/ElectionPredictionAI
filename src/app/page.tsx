'use client'
import Image from "next/image";
import React from 'react';
// @ts-ignore
import USAMap from "react-usa-map";
import stateColors from "@/app/utility/stateColors";

export default function Home() {

    const mapHandler = ( event:any ) => {
        alert(event.target.dataset.name);
        return 0;
    };



    return (
        <div>
            <div className={"bg-gray-800 w-screen h-screen flex flex-col justify-between"}>
                <div className={"flex flex-col h-full justify-center grid content-center"}>
                    <USAMap customize={stateColors()} onClick={mapHandler} />
                </div>
                <div className={"w-full pl-10  pr-10 flex justify-between "}>
                    <div className={"flex flex-row"}>
                        <div className={"  rounded bg-white h-14 w-14"}>                </div>
                        <p className={"grid content-center pl-5"}>Joseph Robinette Biden</p>
                    </div>
                    <div className={"flex flex-row"}>
                        <p className={"grid content-center pr-5"} >Donald John Trump</p>
                        <div className={"rounded bg-white h-14 w-14"}>                </div>
                    </div>

                </div>

                <div className={"flex h-30  pl-10  pr-10 pb-10  pt-6"}>
                    <div className={"bg-blue-500 w-1/2"}>
                        <p>bar</p>
                    </div>
                    <div className={"bg-red-500 w-1/2"}>
                        <p>bar</p>
                    </div>
                </div>
            </div>
            <div className={"h-[23rem]"}>
                <p>pending</p>
            </div>
        </div>


  );
}












