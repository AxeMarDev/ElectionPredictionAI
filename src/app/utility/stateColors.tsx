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
        "AL": { fill: resolveColors("red", "AL") },
        "MS": { fill: resolveColors("red", "MS") },
        "AR": { fill: resolveColors("red", "AR") },
        "LA": { fill: resolveColors("red", "LA") },
        "MO": { fill: resolveColors("red", "MO") },
        "OK": { fill: resolveColors("red", "OK") },
        "KS": { fill: resolveColors("red", "KS") },
        "NE": { fill: resolveColors("red", "NE") },
        "ND": { fill: resolveColors("red", "ND") },
        "SD": { fill: resolveColors("red", "SD") },
        "WY": { fill: resolveColors("red", "WY") },
        "ID": { fill: resolveColors("red", "ID") },
        "UT": { fill: resolveColors("red", "UT") },
        "MT": { fill: resolveColors("red", "MT") },
        "TN": { fill: resolveColors("red", "TN") },
        "KY": { fill: resolveColors("red", "KY") },
        "WV": { fill: resolveColors("red", "WV") },
        "SC": { fill: resolveColors("red", "SC") },
        "IN": { fill: resolveColors("red", "IN") },
        "AK": { fill: resolveColors("red", "AK") },
        "TX": { fill: resolveColors("gray", "TX") },
        "FL": { fill: resolveColors("gray", "FL") },
        "IA": { fill: resolveColors("red", "IA") },
        "OH": { fill: resolveColors("gray", "OH") },
        "NC": { fill: resolveColors("red", "NC") },
        "WI": { fill: resolveColors("gray", "WI") },
        "MI": { fill: resolveColors("gray", "MI") },
        "GA": { fill: resolveColors("gray", "GA") },
        "AZ": { fill: resolveColors("gray", "AZ") },
        "CA": { fill: resolveColors("blue", "CA") },
        "WA": { fill: resolveColors("blue", "WA") },
        "OR": { fill: resolveColors("blue", "OR") },
        "NM": { fill: resolveColors("blue", "NM") },
        "NY": { fill: resolveColors("blue", "NY") },
        "VT": { fill: resolveColors("blue", "VT") },
        "MA": { fill: resolveColors("blue", "MA") },
        "MD": { fill: resolveColors("blue", "MD") },
        "IL": { fill: resolveColors("blue", "IL") },
        "NJ": { fill: resolveColors("blue", "NJ") },
        "DE": { fill: resolveColors("blue", "DE") },
        "CT": { fill: resolveColors("blue", "CT") },
        "RI": { fill: resolveColors("blue", "RI") },
        "CO": { fill: resolveColors("blue", "CO") },
        "VA": { fill: resolveColors("blue", "VA") },
        "DC": { fill: resolveColors("blue", "DC") },
        "HI": { fill: resolveColors("blue", "HI") },
        "MN": { fill: resolveColors("blue", "MN") },
        "ME": { fill: resolveColors("blue", "ME") },
        "NH": { fill: resolveColors("blue", "NH") },
        "PA": { fill: resolveColors("blue", "PA") },
        "NV": { fill: resolveColors("blue", "NV") },
    };



};