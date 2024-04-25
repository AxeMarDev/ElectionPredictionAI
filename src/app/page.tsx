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


    useEffect(() => {
        const fetchData = async (state:any) => {
            const query = `?state=${state}`;
            const response = await fetch(`/api/scrape${query}`);
            return  response.json() ;  // Directly returning the JSON data.
        };

        const mapData = async () => {
            const states = ["arizona", "georgia","pennsylvania","michigan","wisconsin", "nevada"];
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
                ).join('\n')
            ).join(', ');
            console.log("Data as string:", stringData.replace(/,{2,}/g, ',')) ;

            Api( stringData.replace(/,{2,}/g, ','))
        });


    }, []);

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












