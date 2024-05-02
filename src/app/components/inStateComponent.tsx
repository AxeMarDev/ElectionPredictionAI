import React, {useEffect, useState} from "react";
import {convertStateAcronym} from "@/app/page";

type props = { instatePoll:boolean , setInStatePolls:React.Dispatch<React.SetStateAction<boolean>>, state:string}

const ScrapeComponent = ({state}:any) => {
    const [pageData, setPageData] = useState<any>([]);
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

    return (
        <div>

            <div className={"flex flex-col"}>
                <div className={"flex flex-row w-full"}>
                    <div className={"border-white bg-blue-950  border-t-2 border-l-2 w-full p-2"}>
                        <p> Candidates </p>
                    </div>
                    <div className={"border-white bg-blue-950 border-t-2 border-x-2 w-full p-2"}>
                        <p> Percentages </p>
                    </div>
                </div>
                { pageData.map((item:any, index:number)=>(
                    <div key={index}>
                        <div className={"flex flex-row w-full"}>
                            <div className={"border-white border-t-2 border-l-2 w-full p-2"}>
                                <p>{item.results[2].candidate}</p>
                            </div>
                            <div className={"border-white border-t-2 border-x-2 w-full p-2"}>
                                <p>{item.results[2].percentage}</p>
                            </div>
                        </div>
                    </div>
                ))}
                <div className={"flex flex-row w-full"}>
                    <div className={"border-white border-t-2 border-l-2 w-full"}/>
                    <div className={"border-white border-t-2 border-x-2 w-full"}/>
                </div>
            </div>

        </div>
    );
};


export default function InStateComponent({instatePoll, setInStatePolls, state}:props){



    return(
        <div className={"bg-gray-800 p-10 h-screen"}>
            <div className={"flex flex-row"}>
                <button className={"text-5xl font-black mr-5"} onClick={()=>setInStatePolls(!instatePoll)} > {"<  "} </button>
                <h1 className={"text-5xl font-black"}> {convertStateAcronym(state)} </h1>
            </div>

            <div className={"mt-10"}>
                <ScrapeComponent state={convertStateAcronym(state)}/>
            </div>
        </div>
    )
}