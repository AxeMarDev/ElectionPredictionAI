import React from 'react';
import {convertStateAcronym} from "@/app/page";
//import Instateinfo from './instateinfo';

const capitalizeFirstLetter = (str: string) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
};


const state2012:Record<string, any> = {
        "Alabama": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [38.36, 60.55]
        },
        "Alaska": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [40.81, 54.80]
        },
        "Arizona": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [44.59, 53.65]
        },
        "Arkansas": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [36.88, 60.57]
        },
        "California": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [60.24, 37.12]
        },
        "Colorado": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [51.49, 46.13]
        },
        "Connecticut": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [58.06, 40.73]
        },
        "Delaware": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [58.61, 39.96]
        },
        "Florida": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [50.01, 49.13]
        },
        "Georgia": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [45.48, 53.30]
        },
        "Hawaii": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [70.55, 27.84]
        },
        "Idaho": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [32.66, 64.54]
        },
        "Illinois": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [57.58, 40.73]
        },
        "Indiana": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [43.91, 54.13]
        },
        "Iowa": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [51.98, 46.18]
        },
        "Kansas": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [38.05, 59.72]
        },
        "Kentucky": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [37.81, 60.49]
        },
        "Louisiana": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [40.58, 57.78]
        },
        "Maine": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [56.27, 40.91]
        },
        "Maryland": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [61.97, 36.84]
        },
        "Massachusetts": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [60.65, 37.52]
        },
        "Michigan": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [54.21, 44.71]
        },
        "Minnesota": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [52.65, 45.07]
        },
        "Mississippi": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [43.79, 55.29]
        },
        "Missouri": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [44.37, 53.76]
        },
        "Montana": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [41.70, 55.35]
        },
        "Nebraska": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [38.03, 59.75]
        },
        "Nevada": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [52.36, 45.68]
        },
        "New Hampshire": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [52.00, 46.40]
        },
        "New Jersey": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [58.38, 40.58]
        },
        "New Mexico": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [52.99, 43.00]
        },
        "New York": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [63.35, 35.24]
        },
        "North Carolina": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [48.35, 50.39]
        },
        "North Dakota": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [38.70, 58.09]
        },
        "Ohio": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [50.67, 47.69]
        },
        "Oklahoma": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [33.23, 66.77]
        },
        "Oregon": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [54.24, 42.72]
        },
        "Pennsylvania": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [52.00, 46.57]
        },
        "Rhode Island": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [62.70, 35.23]
        },
        "South Carolina": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [44.90, 54.56]
        },
        "South Dakota": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [39.89, 57.88]
        },
        "Tennessee": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [39.03, 59.48]
        },
        "Texas": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [41.38, 57.17]
        },
        "Utah": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [24.84, 72.79]
        },
        "Vermont": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [66.57, 30.67]
        },
        "Virginia": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [51.16, 47.28]
        },
        "Washington": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [56.16, 41.28]
        },
        "West Virginia": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [35.48, 62.30]
        },
        "Wisconsin": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [52.83, 45.89]
        },
        "Wyoming": {
                "candidates": ["Barack Obama", "Mitt Romney"],
                "percentages": [27.82, 68.64]
        }
};

const state2016:Record<string, any> = {
        "Alabama": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [62.08, 34.36]
        },
        "Alaska": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [51.28, 36.55]
        },
        "Arizona": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [49.54, 45.37]
        },
        "Arkansas": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [60.57, 33.65]
        },
        "California": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [61.73, 31.62]
        },
        "Colorado": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [48.16, 43.25]
        },
        "Connecticut": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [54.57, 41.24]
        },
        "Delaware": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [53.09, 41.72]
        },
        "Florida": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [49.02, 47.82]
        },
        "Georgia": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [50.44, 45.35]
        },
        "Hawaii": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [62.22, 30.03]
        },
        "Idaho": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [59.26, 27.50]
        },
        "Illinois": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [55.83, 38.76]
        },
        "Indiana": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [57.20, 37.91]
        },
        "Iowa": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [51.15, 41.74]
        },
        "Kansas": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [56.65, 36.05]
        },
        "Kentucky": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [62.52, 32.68]
        },
        "Louisiana": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [58.09, 38.45]
        },
        "Maine": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [47.83, 44.87]
        },
        "Maryland": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [60.33, 33.91]
        },
        "Massachusetts": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [60.01, 32.81]
        },
        "Michigan": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [47.50, 47.27]
        },
        "Minnesota": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [46.44, 44.92]
        },
        "Mississippi": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [57.85, 40.06]
        },
        "Missouri": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [56.77, 38.14]
        },
        "Montana": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [56.17, 36.00]
        },
        "Nebraska": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [60.32, 34.97]
        },
        "Nevada": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [47.92, 45.50]
        },
        "New Hampshire": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [47.62, 47.25]
        },
        "New Jersey": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [55.45, 41.35]
        },
        "New Mexico": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [48.26, 40.04]
        },
        "New York": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [59.01, 36.52]
        },
        "North Carolina": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [49.83, 46.17]
        },
        "North Dakota": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [64.10, 27.83]
        },
        "Ohio": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [51.69, 43.57]
        },
        "Oklahoma": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [65.32, 28.93]
        },
        "Oregon": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [50.07, 39.09]
        },
        "Pennsylvania": {
                "candidates": ["Donald Trump", "Hillary Clinton"],
                "percentages": [48.18, 47.46]
        },
        "Rhode Island": {
                "candidates": ["Hillary Clinton", "Donald Trump"],
                "percentages": [55.39, 39.80]
        },
                "South Carolina": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [54.94, 40.67]
                },
                "South Dakota": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [61.53, 31.74]
                },
                "Tennessee": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [60.72, 34.72]
                },
                "Texas": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [52.23, 43.24]
                },
                "Utah": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [45.54, 27.46]
                },
                "Vermont": {
                        "candidates": ["Hillary Clinton", "Donald Trump"],
                        "percentages": [61.13, 32.63]
                },
                "Virginia": {
                        "candidates": ["Hillary Clinton", "Donald Trump"],
                        "percentages": [49.75, 44.43]
                },
                "Washington": {
                        "candidates": ["Hillary Clinton", "Donald Trump"],
                        "percentages": [52.54, 36.83]
                },
                "West Virginia": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [68.50, 26.43]
                },
                "Wisconsin": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [47.22, 46.45]
                },
                "Wyoming": {
                        "candidates": ["Donald Trump", "Hillary Clinton"],
                        "percentages": [67.40, 21.63]
                }

};

const state2020:Record<string, { candidates:any, percentages:any }> = {
        "Alabama": {
                candidates : ["Donald Trump", "Joe Biden"],
                percentages: [62.02, 36.57]
        },
        "Alaska": {
                candidates: ["Donald Trump", "Joe Biden"],
                percentages: [52.83, 42.75]
        },
        "Arizona": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [49.36, 49.06]
        },
        "Arkansas": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [62.40, 34.78]
        },
        "California": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [63.48, 34.32]
        },
        "Colorado": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [55.39, 41.94]
        },
        "Connecticut": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [59.27, 39.21]
        },
        "Delaware": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [58.80, 39.77]
        },
        "Florida": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [51.22, 47.86]
        },
        "Georgia": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [49.47, 49.25]
        },
        "Hawaii": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [63.73, 34.27]
        },
        "Idaho": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [63.87, 33.05]
        },
        "Illinois": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [57.48, 40.60]
        },
        "Indiana": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [57.13, 41.15]
        },
        "Iowa": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [53.09, 45.05]
        },
        "Kansas": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [56.21, 41.56]
        },
        "Kentucky": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [62.13, 36.15]
        },
        "Louisiana": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [58.46, 39.85]
        },
        "Maine": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [53.11, 44.01]
        },
        "Maryland": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [65.36, 32.24]
        },
        "Massachusetts": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [65.60, 32.08]
        },
        "Michigan": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [50.62, 47.85]
        },
        "Minnesota": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [52.43, 45.26]
        },
        "Mississippi": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [57.62, 40.81]
        },
        "Missouri": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [57.13, 41.42]
        },
        "Montana": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [56.88, 40.55]
        },
        "Nebraska": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [58.00, 39.20]
        },
        "Nevada": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [50.06, 47.67]
        },
        "New Hampshire": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [52.72, 45.36]
        },
        "New Jersey": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [57.37, 41.38]
        },
        "New Mexico": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [54.29, 43.50]
        },
        "New York": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [60.87, 37.74]
        },
        "North Carolina": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [49.93, 48.59]
        },
        "North Dakota": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [65.17, 31.73]
        },
        "Ohio": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [53.27, 45.24]
        },
        "Oklahoma": {
                "candidates": ["Donald Trump", "Joe Biden"],
                "percentages": [65.37, 32.36]
        },
        "Oregon": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [56.48, 40.38]
        },
        "Pennsylvania": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [50.01, 48.80]
        },
        "Rhode Island": {
                "candidates": ["Joe Biden", "Donald Trump"],
                "percentages": [59.42, 38.60]
        },
                "South Carolina": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [55.05, 43.57]
                },
                "South Dakota": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [61.77, 36.86]
                },
                "Tennessee": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [60.72, 37.45]
                },
                "Texas": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [52.12, 46.48]
                },
                "Utah": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [58.13, 39.49]
                },
                "Vermont": {
                        "candidates": ["Joe Biden", "Donald Trump"],
                        "percentages": [66.09, 31.69]
                },
                "Virginia": {
                        "candidates": ["Joe Biden", "Donald Trump"],
                        "percentages": [54.06, 44.12]
                },
                "Washington": {
                        "candidates": ["Joe Biden", "Donald Trump"],
                        "percentages": [58.69, 39.06]
                },
                "West Virginia": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [68.62, 29.68]
                },
                "Wisconsin": {
                        "candidates": ["Joe Biden", "Donald Trump"],
                        "percentages": [49.45, 48.82]
                },
                "Wyoming": {
                        "candidates": ["Donald Trump", "Joe Biden"],
                        "percentages": [69.94, 27.66]
                }


};



// Define StateData interface

type prop = {state:string}
export default function FindStateData({state}:prop) {
        const foundStatesData = [];


        return (
            <div className={"flex flex-col"}>
                    <div className={"flex flex-row w-full"}>
                            <div className={"border-white bg-blue-950  border-t-2 border-l-2 w-full p-2"}>
                                    <p> 2020 Candidates </p>
                            </div>
                            <div className={"border-white bg-blue-950 border-t-2 border-x-2 w-full p-2"}>
                                    <p> Percentages </p>
                            </div>
                    </div>
                    <div className={"flex flex-row w-full"}>
                            <div className={"border-white border-t-2 border-l-2 w-full p-2"}>
                                  <p>  {state2020[capitalizeFirstLetter(state)] && state2020[capitalizeFirstLetter(state)].candidates ? (
                                        <p>{state2020[capitalizeFirstLetter(state)].candidates.join(", ")}</p>
                                    ) : (
                                        <p>No data available for this state</p>
                                    )}</p>
                            </div>
                            <div className={"border-white border-t-2 border-x-2 w-full p-2"}>
                                    <p> {state2020[capitalizeFirstLetter(state)] && state2020[capitalizeFirstLetter(state)].percentages ? (
                                        <p>{state2020[capitalizeFirstLetter(state)].percentages.join(", ")}</p>
                                    ) : (
                                        <p>No data available for this state</p>
                                    )}</p>
                            </div>

                    </div>
                    <div className={"flex flex-row w-full"}>
                            <div className={"border-white bg-blue-950  border-t-2 border-l-2 w-full p-2"}>
                                    <p> 2016 Candidates </p>
                            </div>
                            <div className={"border-white bg-blue-950 border-t-2 border-x-2 w-full p-2"}>
                                    <p> Percentages </p>
                            </div>
                    </div>
                    <div className={"flex flex-row w-full"}>
                            <div className={"border-white border-t-2 border-l-2 w-full p-2"}>
                                    <p>{state2016[capitalizeFirstLetter(state)] && state2016[capitalizeFirstLetter(state)].candidates ? (
                                        <p>{state2016[capitalizeFirstLetter(state)].candidates.join(", ")}</p>
                                    ) : (
                                        <p>No data available for this state</p>
                                    )}</p>
                            </div>
                            <div className={"border-white border-t-2 border-x-2 w-full p-2"}>
                                    <p> {state2016[capitalizeFirstLetter(state)] && state2016[capitalizeFirstLetter(state)].percentages ? (
                                        <p>{state2016[capitalizeFirstLetter(state)].percentages.join(", ")}</p>
                                    ) : (
                                        <p>No data available for this state</p>
                                    )}</p>
                            </div>

                    </div>
                    <div className={"flex flex-row w-full"}>
                            <div className={"border-white bg-blue-950  border-t-2 border-l-2 w-full p-2"}>
                                    <p> 2012 Candidates </p>
                            </div>
                            <div className={"border-white bg-blue-950 border-t-2 border-x-2 w-full p-2"}>
                                    <p> Percentages </p>
                            </div>
                    </div>
                    <div className={"flex flex-row w-full"}>
                            <div className={"border-white border-t-2 border-l-2 w-full p-2"}>
                                    <p>{state2012[capitalizeFirstLetter(state)] && state2012[capitalizeFirstLetter(state)].candidates ? (
                                        <p>{state2012[capitalizeFirstLetter(state)].candidates.join(", ")}</p>
                                    ) : (
                                        <p>No data available for this state</p>
                                    )}</p>
                            </div>
                            <div className={"border-white border-t-2 border-x-2 w-full p-2"}>
                                    <p> {state2012[capitalizeFirstLetter(state)] && state2012[capitalizeFirstLetter(state)].percentages ? (
                                        <p>{state2012[capitalizeFirstLetter(state)].percentages.join(", ")}</p>
                                    ) : (
                                        <p>No data available for this state</p>
                                    )}</p>
                            </div>

                    </div>

            </div>
        )
}
