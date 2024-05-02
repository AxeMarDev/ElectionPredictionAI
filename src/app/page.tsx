'use client'
import React, {useState, useEffect, useLayoutEffect} from 'react';
import Image from "next/image";
import NewsPage from "./newsComponent";
import VideoEmbed from "./videoEmbed";
// @ts-ignore
import USAMap from "react-usa-map";
import stateColors from "@/app/utility/stateColors";
import stateinfo from "@/app/utility/stateinfo";
import Api from "./utility/API";
import NewsComponent from './newsComponent';
import scrape from "../../pages/api/scrape"
import InStateComponent from "@/app/components/inStateComponent";
import AIMEPLOGO from "../../READMEresources/aimep.png"

 

function AmountOfVotesPerCandidate(whoWonList:string): {"D":number, "R":number}{

    const currentAllocations:any = {
        "alabama": 9, "alaska": 3, "arizona": 11, "arkansas": 6, "california": 54, "colorado": 9, "connecticut": 7, "delaware": 3,
        "florida": 30, "georgia": 16, "hawaii": 4, "idaho": 4, "illinois": 19, "indiana": 11, "iowa": 6, "kansas": 6, "kentucky": 8, "louisiana": 8, "maine": 4,
        "maryland": 10, "massachusetts": 11, "michigan": 15, "minnesota": 10, "mississippi": 6, "missouri": 10, "montana": 4, "nebraska": 5,
        "nevada": 6, "new hampshire": 4, "new jersey": 14, "new mexico": 5, "new york": 28, "north carolina": 16, "north dakota": 3, "ohio": 17, "oklahoma": 7, "oregon": 7, "pennsylvania": 19, "rhode island": 4, "south carolina": 9,
        "south dakota": 3, "tennessee": 11, "texas": 40, "utah": 6, "vermont": 3, "virginia": 13, "washington": 12, "west virginia": 4,
        "wisconsin": 10, "wyoming": 3, "district of columbia": 3
    }
    const defaultWin:any = {
        "alabama": "Republican", "alaska": "Republican", "arizona": "Democrat", "arkansas": "Republican", "california": "Democrat", "colorado": "Democrat",
        "connecticut": "Democrat", "delaware": "Democrat", "florida": "Republican", "georgia": "Democrat", "hawaii": "Democrat", "idaho": "Republican", "illinois": "Democrat", "indiana": "Republican",
        "iowa": "Republican", "kansas": "Republican", "kentucky": "Republican", "louisiana": "Republican", "maine": "Democrat", "maryland": "Democrat",
        "massachusetts": "Democrat", "michigan": "Democrat", "minnesota": "Democrat", "mississippi": "Republican", "missouri": "Republican", "montana": "Republican",
        "nebraska": "Republican", "nevada": "Democrat", "new hampshire": "Democrat", "new jersey": "Democrat", "new mexico": "Democrat", "new york": "Democrat", "north carolina": "Republican",
        "north dakota": "Republican", "ohio": "Republican", "oklahoma": "Republican", "oregon": "Democrat", "pennsylvania": "Democrat", "rhode island": "Democrat",
        "south carolina": "Republican", "south dakota": "Republican", "tennessee": "Republican", "texas": "Republican", "utah": "Republican", "vermont": "Democrat", "virginia": "Democrat",
        "washington": "Democrat", "west virginia": "Republican", "wisconsin": "Democrat", "wyoming": "Republican", "district of columbia": "Democrat"
    }

    // Convert the JSON object to an array of objects
    const resultArray = Object.entries(defaultWin).map(([state, result]) => ({
        state: state.replace(/_/g, ' '), // Assuming you want to replace underscores with spaces if any
        result: result
    }));

    const added = (  ): {"D":number, "R":number} => {

        let  returnValue  = {"D":0, "R":0}

        if ( whoWonList !== ""){

            const jsonObjectOfList:any = JSON.parse(whoWonList)

            resultArray.map((state)=> {
                console.log(state.state)

                if( jsonObjectOfList[state.state] !== undefined){
                    const resultNew = jsonObjectOfList[state.state];
                    if (  resultNew === "Republican" ){
                        const value = currentAllocations[state.state];
                        returnValue = ({ "D": returnValue.D ,"R": returnValue.R + value } )
                    } else if(  resultNew === "Democrat" ){
                        const value = currentAllocations[state.state];
                        returnValue = ({ "D": returnValue.D + value ,"R": returnValue.R  } )
                    }
                } else{
                    if (  state.result === "Republican" ){
                        const value = currentAllocations[state.state];
                        returnValue = ({ "D": returnValue.D ,"R": returnValue.R + value } )
                    } else if(  state.result === "Democrat" ){
                        const value = currentAllocations[state.state];
                        returnValue = ({ "D": returnValue.D + value ,"R": returnValue.R  } )
                    }
                }
            })
        } else {
            resultArray.map((state)=> {
                if (  state.result === "Republican" ){
                    const value = currentAllocations[state.state];
                    returnValue = ({ "D": returnValue.D ,"R": returnValue.R + value } )
                } else if(  state.result === "Democrat" ){
                    const value = currentAllocations[state.state];
                    returnValue = ({ "D": returnValue.D + value ,"R": returnValue.R  } )
                }
            })

        }

        return returnValue
    }

    return added()

}
 function convertStateAcronym(acronym: string): string {
    const states: Record<string, string> = {
        "AL": "alabama",
        "AK": "alaska",
        "AZ": "arizona",
        "AR": "arkansas",
        "CA": "california",
        "CO": "colorado",
        "CT": "connecticut",
        "DE": "delaware",
        "FL": "florida",
        "GA": "georgia",
        "HI": "hawaii",
        "ID": "idaho",
        "IL": "illinois",
        "IN": "indiana",
        "IA": "iowa",
        "KS": "kansas",
        "KY": "kentucky",
        "LA": "louisiana",
        "ME": "maine",
        "MD": "maryland",
        "MA": "massachusetts",
        "MI": "michigan",
        "MN": "minnesota",
        "MS": "mississippi",
        "MO": "missouri",
        "MT": "montana",
        "NE": "nebraska",
        "NV": "nevada",
        "NH": "new hampshire",
        "NJ": "new jersey",
        "NM": "new mexico",
        "NY": "new york",
        "NC": "north carolina",
        "ND": "north dakota",
        "OH": "ohio",
        "OK": "oklahoma",
        "OR": "oregon",
        "PA": "pennsylvania",
        "RI": "rhode island",
        "SC": "south carolina",
        "SD": "south dakota",
        "TN": "tennessee",
        "TX": "texas",
        "UT": "utah",
        "VT": "vermont",
        "VA": "virginia",
        "WA": "washington",
        "WV": "west virginia",
        "WI": "wisconsin",
        "WY": "wyoming"
    };

    return states[acronym.toUpperCase()] || "unknown";
}
export {convertStateAcronym}




export default function Home() {

    const [ newStateColors, setNewStateColors] = useState("")
    const [reCalculate, setRecalculate] = useState(0)
    const [fieldValue, setFieldValue ] = useState("")

    useEffect(() => {
        const fetchData = async (state:any) => {
            const query = `?state=${state}`;
            const response = await fetch(`/api/scrape${query}`);
            return  response.json() ;  // Directly returning the JSON data.
        };

        const mapData = async () => {
            const states = ["arizona", "georgia",
                "pennsylvania","michigan",
                "wisconsin", "nevada",
                "ohio", "texas",
                "northcarolina", "florida", "iowa", "virginia"
            ];
            const dataForApi = await Promise.all(states.map(state => {
                return  fetchData(state)
            }));

            // Now dataForApi is an array of results from each fetchData call.
            console.log(dataForApi);  // You can check all the fetched data here.
            return dataForApi;
        };

        mapData().then((finalData) => {

            const stringData = finalData.map(item =>
                item.response.map((inneritem:any)=>
                    inneritem.results.map((polls:any)=> {
                        if (polls.candidate === ''){
                            return '';
                        } else {
                            return `[${polls.state}: ${polls.candidate} = ${polls.percentage}]`
                        }
                    }).join(",")
                ).join(',')// \n was here
            ).join(', ');
            console.log("Data as string:", stringData.replace(/,{2,}/g, ',')) ;

            Api( stringData.replace(/,{2,}/g, ','), fieldValue).then((response)=>{
                setNewStateColors(response)
            })

            setFieldValue('')
        });

        console.log("recalulate")
    }, [reCalculate]);

    const democratPercent = 40; // Example percentage value for Democrat
    const republicanPercent = 60; // Example percentage value for Republican
    const [inStatePolls, setInStatePolls] = useState(false)
    const [pickedState, setPickedState] = useState( "")

    // Retrieve the stateinfo object
    const stateData = stateinfo();
    const ALLstateinfo=stateData;//combine all string data here then give this to AI

    // testing comment
    const mapHandler = ( event:any ) => {
        //(event.target.dataset.name);
        setInStatePolls(true)
        setPickedState( event.target.dataset.name)
        return 0;
    };

    const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the collapsible tab

    const toggleTab = () => setIsOpen(!isOpen);

    return (
        !inStatePolls ? (
                <div>
                    {/* <div>
                        <input className={"text-black"} type={"text"} value={fieldValue} onChange={(e)=> setFieldValue(e.target.value)}/>
                        <button onClick={()=>setRecalculate(reCalculate+1)}> resend </button>
                    </div> */}
                    <div className={"bg-gray-800 w-screen h-screen flex flex-col justify-between"}>
                        {/* Input and Button Section */}
                        <Image className={"w-32 fixed left-10 top-3"} src={AIMEPLOGO} alt={"aimlogo"}/>
                        {/* Map Section */}
                        <div className={"flex bg-gray-800 flex-col justify-center  content-center overflow-hidden "} >
                            <div className="mt-2 h-10 flex justify-end w-full p-4">
                                {/* <label htmlFor="scenarioInput" className="block text-white font-bold mb-2">
                                    Enter a Hypothetical Scenario:
                                </label> */}
                                <input
                                    type="text"
                                    id="scenarioInput"
                                    placeholder="Enter a Hypothetical Scenario"
                                    value={fieldValue}
                                    onChange={(e) => setFieldValue(e.target.value)}
                                    className="text-black bg-gray-200 placeholder-gray-700 w-1/5 h-8 p-2 rounded-md"
                                />
                                <button
                                    onClick={() => setRecalculate(reCalculate + 1)}
                                    className=" ml-2 align-middle select-none text-center items-center text-xs py-3 px-6 rounded-lg h-8 text-gray-200 font-bold align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg border border-gray-200 text-gray-200 hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] flex "
                                >
                                    Resend
                                </button>
                            </div>
                            <div className={" grid flex-col justify-center  content-center overflow-hidden "}>
                                <USAMap customize={stateColors(newStateColors)} onClick={mapHandler} />
                            </div>
                        </div>
                        {/* Bottom Section */}
                        <div className={"w-full pl-10 bg-gray-800/10 h-20 pr-10 flex justify-between"}>
                            <div>
                                <div className={"flex flex-col items-center"}>
                                    <div className={"  rounded bg-white h-14 w-14"} style={{
                                        backgroundImage: 'url(https://www.whitehouse.gov/wp-content/uploads/2021/04/P20210303AS-1901-cropped.jpg?w=1536)',
                                        backgroundSize: "cover"
                                    }}/>
                                    <p className={"grid content-center font-xs pl-5 pr-3" }>Joseph R. Biden</p>
                                </div>
                            </div>
                            <div className="flex h-8 bg-gray-200 rounded-md  overflow-hidden my-4"style= {{ width: '70vw' }}>
                                <div
                                    style={{ width: `${AmountOfVotesPerCandidate(newStateColors).D/536 * 100}%` }}
                                    className="bg-blue-500 flex items-center justify-center text-white text-sm font-medium"
                                >
                                    {AmountOfVotesPerCandidate(newStateColors).D }
                                </div>
                                <div
                                    style={{ width: `${AmountOfVotesPerCandidate(newStateColors).R/536 * 100}%` }}
                                    className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
                                >
                                    {AmountOfVotesPerCandidate(newStateColors).R}
                                </div>
                            </div>
                            <div className={"flex flex-col items-center"} >
                                <div className={"rounded bg-white h-14 w-14"} style={{
                                    backgroundImage: 'url(https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg)',
                                    backgroundSize: "cover"
                                }}/>
                                <p className={"grid content-center font-xs pr-5 pl-3"} >Donald J. Trump</p>
                            </div>
                        </div>
                        <div className="mx-auto mt-1 mb-6 w-4 rounded-md bd-gray-100 justify-top" >
                            
                        </div>

                    </div>

                    <div className={`absolute bottom-0 w-full ${isOpen ? 'h-full' : 'h-10'} transition-height overflow-x-hidden duration-500 ease-in-out`}>
                        <div className="bg-gray-900 text-white cursor-pointer p-2 text-center" onClick={toggleTab}>
                            {isOpen ? '🡫' : '🡩'}
                        </div>
                        {isOpen && (
                            <div className="bg-gray-800 w-screen h-screen flex flex-col justify-between">
                                {/* Container for videos and news */}
                                <div className="flex flex-col  flex-auto bg-gray-800">
                                    {/* Container for videos */}
                                    <div className="md:flex-1 justify-center h-2/6">
                                        <h2 className="text-4xl font-bold bg-gray-900 font-serif p-6 mb-4">Live News Stream</h2>
                                        {/* Embedded YouTube video and other content */}
                                        <div className="flex justify-between space-x-10 ">
                                            <div className="flex-1 aspect-w-16 aspect-h-4">
                                                <VideoEmbed videoId = "YDfiTGGPYCk"/>
                                            </div>
                                            <div className="flex-1 aspect-w-16 aspect-h-4">
                                                <VideoEmbed videoId = "gN0PZCe-kwQ"/>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Container for news */}
                                    <div className="md:flex-1 overflow-hidden mt-4 bg-gray-800"> 
                                      
                                        <h2 className="text-4xl font-bold bg-gray-900 font-serif p-6 ">Latest News</h2>
                                        <NewsComponent/>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            ):(

               <InStateComponent state={pickedState} instatePoll={inStatePolls} setInStatePolls={setInStatePolls}/>

        )

  );
}












