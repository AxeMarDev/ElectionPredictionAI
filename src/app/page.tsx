'use client'
import Image from "next/image";
import React from 'react';
// @ts-ignore
import USAMap from "react-usa-map";
import stateColors from "@/app/utility/stateColors";
import Api from "./utility/API";


export default function Home() {

    const mapHandler = ( event:any ) => {
        alert(event.target.dataset.name);
        return 0;
    };



    return (
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

                <div className={"flex h-30  pl-10  pr-10 pb-10  pt-6"}>
                    <div className={"bg-blue-500 w-[45%]"}>
                        <p>bar</p>
                    </div>
                    <div className={"bg-red-500 w-[55%]"}>
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












