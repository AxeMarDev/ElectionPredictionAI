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
              <USAMap onClick={mapHandler} />
          </div>
      </div>
  );
}


// Rusty Can willy
// He was a good guy
// a dude wanted something he couldnt afford

// so he couldnt pay, now he is running from the law
// Rusty Can Willy

// let me tell yall a lil story
// down in johnson city texas

// we he born
// who could of known
// rusty can willy was not willing
// to change what he thougth about
// money yeah yeah



// Traveled through travis county on late afternoon
// Stopped by the 6th, had a couple of brews
// danced with preatty women all nigth long long
// When monring came, police where closin
// he drove to cypress west of houston
//
// erse 1:
// In the heart of the town, under a neon moon's glow,
// Where the river runs slow and the summer winds blow,
//     Chorus:
// It's that old country story, as timeless as the stars,
// Of love found on backroads, in dive bars and old cars,
//     Where heartbreak and healing go hand in hand,
//     And love is written in the land, under the sky so grand.
//
//     Verse 2:
// We danced through the night, with your hand in mine,
//     Under strings of lights, our hearts did align,
//     In a moment so sweet, I could swear time stood still,
//     With every beat of the music, my heart you did fill.
//
//     Chorus:
// It's that old country story, as timeless as the stars,
// Of love found on backroads, in dive bars and old cars,
//     Where heartbreak and healing go hand in hand,
//     And love is written in the land, under the sky so grand.
//
//     Bridge:
// But as every country song tells, not all is meant to last,
//     Our love became a memory, a whisper from the past,
// Yet in every melody, I find pieces of you and me,
//     In the chords of country songs, our love will always be.
//
//     Final Chorus:
//     It's that old country story, sung under a moon so bright,
// About love that burns fiercely, then fades into the night,
// But in every verse and chorus, our story will stand,
//     A testament to love, in this vast, beautiful land.
//
//
//
//
//









