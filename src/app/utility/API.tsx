import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY  , dangerouslyAllowBrowser: true});

async function Api(content: string, question:string) {
    const endpoint = 'https://api.openai.com/v1/chat/completions';
    const requestBody = {
        messages: [
            { role: "system", content: `given the following polls for US president per state, return a JSON object structured as { state: result, state: result... } where the result is either Republican or Democrat, take into consideration the following senerio and how it would affect the election: ${ question} . Respond with nothing else apart from JSON.` },
            { role: "user", content: content }
        ],
        model: "gpt-3.5-turbo",
    };

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openai.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        const data = await response.json();
        console.log("Response from API:", data);

        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            const summary = data.choices[0].message.content.trim();
            console.log("Summary:", summary);
            return summary;
        } else {
            console.error("Error: Summary not found in API response");
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export default Api;
