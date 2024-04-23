import fetch from 'node-fetch';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const response = await fetch('https://projects.fivethirtyeight.com/polls/arizona/');
        const body = await response.text();
        const $ = cheerio.load(body);
        const polls:any = [];

        // Select each row in the table
        $('table.polls-table tr.visible-row').each((index, element) => {
            const $row = $(element);
            const poll = {
                date: $row.find('.dates .date-wrapper').text().trim(),
                sample: $row.find('.sample').text().trim(),
                sampleType: $row.find('.sample-type').text().trim(),
                pollster: $row.find('.pollster-name').text().trim(),
                sponsor: $row.find('.sponsor a').text().trim(),
                results: <any>[]
            };

            // Extract results for each candidate
            $row.find('.answers, .answer').each((i, ans) => {
                const $ans = $(ans);
                poll.results.push({
                    candidate: $ans.find('p, .answer').text().trim(),
                    percentage: $ans.find('.heat-map').text().trim()
                });
            });

            polls.push(poll);
        });

        console.log(polls);

    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}
