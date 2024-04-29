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

const NewsComponent : React.FC = () => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const apiKey = 'fe1c05a3d0f847b590632a6d0556209f';
        const fetchNews = async () => {
            try {
                const response = await axios.get<NewsApiResponse>(`https://newsapi.org/v2/top-headlines`, {
                    params: {
                        country: 'us',
                        q: 'trump',
                        apiKey: apiKey
                    }
                });
                if (response.data.status === 'ok') {
                    setArticles(response.data.articles);
                } else {
                    throw new Error('API response was not ok.');
                }
                setLoading(false);
            } catch (err) {
                if (axios.isAxiosError(err)) {
                    const message = err.response?.data.message || 'Failed to fetch the news';
                    setError(message);
                } else {
                    setError('An unexpected error occurred');
                }
                console.error('Error fetching news:', err);
                setLoading(false);
            } 
        };

        fetchNews();
    }, []);

    if (loading) return <p>Loading news...</p>;
    if (error) return <p>Error loading news: {error}</p>;

    return (
        <div className="p-4">
            {articles.length > 0 ? (
                articles.map((article, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="font-semibold">{article.title}</h2>
                        {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className="w-full h-auto" />
                        )}
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className= "font-semibold">Read more</a>
                    </div>
                ))
            ) : (
                <p>No news articles found.</p>
            )}
        </div>
    )};

export default NewsComponent;