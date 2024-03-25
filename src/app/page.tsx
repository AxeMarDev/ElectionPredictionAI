'use client'
import Image from "next/image";
import React from 'react';
// @ts-ignore
import USAMap from "react-usa-map";

export default function Home() {

    const mapHandler = ( event:any ) => {
        alert(event.target.dataset.name);
        return 0;
    };

    return (
      <div className={"bg-black w-screen h-screen flex justify-center grid content-center"}>
          <div className="App">
              <p> this is the website </p>
              <USAMap onClick={mapHandler} />
          </div>
      </div>
  );
}
