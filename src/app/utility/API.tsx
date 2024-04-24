import OpenAI from "openai";
import fetch from 'node-fetch';

const openai = new OpenAI({ apiKey: "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" });

async function Api( content:string) {
    // Read the content of the file
    //const filePath = '/Users/austenmeadows/Downloads/test.txt'; // Update with your file path
    //const fileContent = fs.readFileSync(filePath, 'utf-8');

    // Set up OpenAI API endpoint and parameters for summarization
    const endpoint = 'https://api.openai.com/v1/chat/completions'; // Use the chat completions endpoint
    const maxTokens = 100;
    const temperature = 0.7;

    // Construct request body with file content as context for summarization
    const requestBody = {
        messages: [{ role: "system", content: "given the info, who is likely to win in the upcoming 2024 pres election,give a percantage for each canidate out of 100% " }, { role: "user", content: content }],
        model: "gpt-3.5-turbo",
    };

    try {
        // Send request to OpenAI API for chat completions
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${openai.apiKey}`
            },
            body: JSON.stringify(requestBody)
        });

        // Handle response
        const data = await response.json();
        console.log("Response from API:", data);

        if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
            const summary = data.choices[0].message.content.trim();
            console.log("Summary:", summary);
        } else {
            console.error("Error: Summary not found in API response");
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

export default Api;