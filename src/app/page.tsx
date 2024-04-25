'use client'
import React, {useState, useEffect, useLayoutEffect} from 'react';
import Image from "next/image";
import NewsPage from "./newsPage";
import VideoEmbed from "./videoEmbed";
// @ts-ignore
import USAMap from "react-usa-map";
import stateColors from "@/app/utility/stateColors";
import stateinfo from "@/app/utility/stateinfo";
import Api from "./utility/API";
import scrape from "../../pages/api/scrape"


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



const ScrapeComponent = ({state}:any) => {
    const [pageData, setPageData] = useState({response: ""});
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {

            const query = `?state=${state}`;

            try {
                const response = await fetch(`/api/scrape${query}`);
                const data = await response.json();
                setPageData(data.response);
                console.log(data.response)
                setLoading(false);
            } catch (error:any) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    //commented this out because it moves everything on the page and cuts off the map
    return (
        <div>
            <h1>Scraped Data</h1>
            <p className={"text-white"}>Page Title: {pageData.response}</p>
        </div>
    );
};

const PollTableComponent = (state:string, [instatePoll,setInStatePolls]:any) =>{

    return(
        <div className={"bg-gray-800 p-10 "}>
            <button  onClick={()=>setInStatePolls(!instatePoll)} > go back</button>
            <p>{ convertStateAcronym(state) }</p>
            <div>
                <ScrapeComponent state={convertStateAcronym(state)}/>
            </div>
        </div>
    )

}

async function FetchInfo(){

}

export default function Home() {

    const [ resultFromGPT, setResultfromGPT] = useState("")
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

    // const buttonColorHandler = () =>{
    //     setState("bg-red-200")
    //     console.log("reponse of chat should be here")
    // }

    return (
        !inStatePolls ? (
                <div>
                    <div>
                        <input className={"text-black"} type={"text"} value={fieldValue} onChange={(e)=> setFieldValue(e.target.value)}/>
                        <button onClick={()=>setRecalculate(reCalculate+1)}> resend </button>
                    </div>
                    <div className={"bg-gray-800 w-screen h-screen flex flex-col justify-between"}>
                        <div className={"flex flex-col h-full justify-center grid content-center"} style={{ overflow: 'hidden'}}>
                            <USAMap customize={stateColors(newStateColors)} onClick={mapHandler} />
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
                                    {AmountOfVotesPerCandidate(newStateColors).D }
                                </div>
                                <div
                                    style={{ width: `${republicanPercent}%` }}
                                    className="bg-red-500 flex items-center justify-center text-white text-sm font-medium"
                                >
                                    {AmountOfVotesPerCandidate(newStateColors).R}
                                </div>
                            </div>
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
                PollTableComponent( pickedState ,[inStatePolls, setInStatePolls])
            )

  );
}












