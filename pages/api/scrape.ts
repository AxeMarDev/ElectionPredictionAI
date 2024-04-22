// pages/api/scrape.js
import fetch from 'node-fetch';
import cheerio from 'cheerio';

export default async function handler(req:any, res:any) {
    // URL to scrape
    const url = 'https://google.com';

    try {
        // Fetch the content from the URL
        const response = await fetch(url);
        const body = await response.text();

        // Load the HTML into cheerio
        const $ = cheerio.load(body);

        // Extract data using cheerio
        const pageTitle = $('title').text(); // Example: Get the title of the page

        // Respond with the extracted data
        res.status(200).json({ title: pageTitle });
    } catch (error) {
        // Handle errors
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
