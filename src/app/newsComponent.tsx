import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';

interface NewsArticle {
    source: {
        id: string | null;
        name: string;
    }
    author: string | null;
    title: string;             // Title of the news article
    description: string;       // Short description or summary of the news article
    url: string;               // URL to the full news article
    urlToImage: string | null; // URL to a relevant image for the news article, which might be null
    publishedAt: string;
    content: string;
}

interface NewsApiResponse {
    status: string;            // Response status from the API, e.g., "ok" or "error"
    totalResults: number;      // Total number of results returned
    articles: NewsArticle[];   // Array of news articles
}

const isAxiosError = (error: any): error is AxiosError => {
    return error.isAxiosError;
};

const NewsComponent: React.FC = () => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const topics = ['trump', 'biden', 'kennedy', 'election'];  // Add or modify topics here
        const apiKey = 'fe1c05a3d0f847b590632a6d0556209f';
        let allArticles: NewsArticle[] = [];

        const fetchNews = async (query: string) => {
            try {
                const response = await axios.get<NewsApiResponse>('https://newsapi.org/v2/top-headlines', {
                    params: { country: 'us', q: query, apiKey: apiKey }
                });
                if (response.data.status === 'ok') {
                    return response.data.articles;
                } else {
                    throw new Error(`API response was not ok for query: ${query}`);
                }
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data.message || 'Failed to fetch the news');
                } else {
                    setError('An unexpected error occurred');
                }
                throw err;  // Rethrow to handle in Promise.allSettled
            }
        };

        Promise.allSettled(topics.map(topic => fetchNews(topic)))
            .then(results => {
                results.forEach(result => {
                    if (result.status === 'fulfilled') {
                        allArticles = allArticles.concat(result.value);
                    }
                });
                setArticles(allArticles);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching news for all topics:', err);
                setLoading(false);
            });

    }, []);

    if (loading) return <p>Loading news...</p>;
    if (error) return <p>Error loading news: {error}</p>;

    return (
        <div className="p-10">
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="font-semibold text-2xl font-serif">{article.title}</h2>
                        <div className="flex items-center p-5 ">
                            {article.urlToImage && (
                                <img src={article.urlToImage} alt={article.title} className="border-solid border-2 border-gray-500 rounded-lg max-w-md w-2/4 mt-3 mb-3" />
                            )}
                        </div>
                        <p className="font-normal text-lg font-serif">{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="hover:text-gray-100 hover:font-semibold font-serif text-lg text-gray-400 font-normal">Read more...</a>
                    </div>
                ))
            ) : (
                <p>No news articles found.</p>
            )}
        </div>
    );
};

export default NewsComponent;