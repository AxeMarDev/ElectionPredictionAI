/* optional customization of filling per state and calling custom callbacks per state */
function convertStateNameToAcronym(stateName: string): string {
    const stateMap: { [key: string]: string } = {
        "alabama": "AL", "alaska": "AK", "arizona": "AZ", "arkansas": "AR", "california": "CA",
        "colorado": "CO", "connecticut": "CT", "delaware": "DE", "florida": "FL", "georgia": "GA",
        "hawaii": "HI", "idaho": "ID", "illinois": "IL", "indiana": "IN", "iowa": "IA",
        "kansas": "KS", "kentucky": "KY", "louisiana": "LA", "maine": "ME", "maryland": "MD",
        "massachusetts": "MA", "michigan": "MI", "minnesota": "MN", "mississippi": "MS", "missouri": "MO",
        "montana": "MT", "nebraska": "NE", "nevada": "NV", "new hampshire": "NH", "new jersey": "NJ",
        "new mexico": "NM", "new york": "NY", "north carolina": "NC", "north dakota": "ND", "ohio": "OH",
        "oklahoma": "OK", "oregon": "OR", "pennsylvania": "PA", "rhode island": "RI", "south carolina": "SC",
        "south dakota": "SD", "tennessee": "TN", "texas": "TX", "utah": "UT", "vermont": "VT",
        "virginia": "VA", "washington": "WA", "west virginia": "WV", "wisconsin": "WI", "wyoming": "WY"
    };

    // Convert the input state name to lowercase to match the keys in the map
    stateName = stateName.toLowerCase();

    // Return the state acronym, or an error message if the state is not found
    return stateMap[stateName] || "Unknown State";
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

export default function stateColors( newStateColors:string )  {



    const resolveColors = (deafaultColor:string, accrymym:string) =>{
        if(newStateColors === "" ){
            return deafaultColor
        } else {
            const objectnewStateColors:any = JSON.parse(newStateColors);
            console.log(objectnewStateColors)
            if ( objectnewStateColors[convertStateAcronym(accrymym)]!== undefined ){

                if ( objectnewStateColors[convertStateAcronym(accrymym)] === "Republican"){
                    return "red"
                } else{
                    return "blue"
                }

            } else {
                return deafaultColor
            }
        }
    }
    return {
        // Solid red states
        "AL": { fill: resolveColors("darkred", "AL") },
        "MS": { fill: resolveColors("darkred", "MS") },
        "AR": { fill: resolveColors("darkred", "AR") },
        "LA": { fill: resolveColors("darkred", "LA") },
        "MO": { fill: resolveColors("darkred", "MO") },
        "OK": { fill: resolveColors("darkred", "OK") },
        "KS": { fill: resolveColors("darkred", "KS") },
        "NE": { fill: resolveColors("darkred", "NE") },
        "ND": { fill: resolveColors("darkred", "ND") },
        "SD": { fill: resolveColors("darkred", "SD") },
        "WY": { fill: resolveColors("darkred", "WY") },
        "ID": { fill: resolveColors("darkred", "ID") },
        "UT": { fill: resolveColors("darkred", "UT") },
        "MT": { fill: resolveColors("darkred", "MT") },
        "TN": { fill: resolveColors("darkred", "TN") },
        "KY": { fill: resolveColors("darkred", "KY") },
        "WV": { fill: resolveColors("darkred", "WV") },
        "SC": { fill: resolveColors("darkred", "SC") },
        "IN": { fill: resolveColors("darkred", "IN") },
        "AK": { fill: resolveColors("darkred", "AK") },
        "TX": { fill: resolveColors("gray", "TX") },
        "FL": { fill: resolveColors("gray", "FL") },
        "IA": { fill: resolveColors("darkred", "IA") },
        "OH": { fill: resolveColors("gray", "OH") },
        "NC": { fill: resolveColors("darkred", "NC") },
        "WI": { fill: resolveColors("gray", "WI") },
        "MI": { fill: resolveColors("gray", "MI") },
        "GA": { fill: resolveColors("gray", "GA") },
        "AZ": { fill: resolveColors("gray", "AZ") },
        "CA": { fill: resolveColors("navy", "CA") },
        "WA": { fill: resolveColors("navy", "WA") },
        "OR": { fill: resolveColors("navy", "OR") },
        "NM": { fill: resolveColors("navy", "NM") },
        "NY": { fill: resolveColors("navy", "NY") },
        "VT": { fill: resolveColors("navy", "VT") },
        "MA": { fill: resolveColors("navy", "MA") },
        "MD": { fill: resolveColors("navy", "MD") },
        "IL": { fill: resolveColors("navy", "IL") },
        "NJ": { fill: resolveColors("navy", "NJ") },
        "DE": { fill: resolveColors("navy", "DE") },
        "CT": { fill: resolveColors("navy", "CT") },
        "RI": { fill: resolveColors("navy", "RI") },
        "CO": { fill: resolveColors("navy", "CO") },
        "VA": { fill: resolveColors("navy", "VA") },
        "DC": { fill: resolveColors("navy", "DC") },
        "HI": { fill: resolveColors("navy", "HI") },
        "MN": { fill: resolveColors("navy", "MN") },
        "ME": { fill: resolveColors("navy", "ME") },
        "NH": { fill: resolveColors("navy", "NH") },
        "PA": { fill: resolveColors("gray", "PA") },
        "NV": { fill: resolveColors("gray", "NV") },
    };



};