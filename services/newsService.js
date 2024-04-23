const API_KEY = process.env.NEWS_API_KEY;  

const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=politics&apiKey=${API_KEY}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.articles;
    } catch (error) {
        console.error('Failed to fetch news:', error);
        return [];  // Return an empty array as a fallback
    }
};

export default fetchNews;