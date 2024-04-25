const NEWS_API_KEY = 'fe1c05a3d0f847b590632a6d0556209f';

import React, { useState, useEffect } from 'react';

interface NewsComponentsProps {
    candidate: string;
}

interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage: string;
}

interface NewsApiResponse {
    status: string;
    totalResults: number;
    articles: NewsArticle[];
}

const NewsComponent: React.FC<NewsComponentsProps> = ({candidate}) => {
    const [articles, setArticles] = useState<NewsArticle[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${candidate}&apiKey=${NEWS_API_KEY}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data:NewsApiResponse = await response.json();
                setArticles(data.articles);
                console.log(data.articles);  
            } catch (error:any) {
                console.error("Fetching articles failed: ", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    return (
    <div className="p-4">
        {loading && <p>Loading news...</p>}
        {error && <p>Error loading news: {error}</p>}
        {articles.map((article, index) => (
            <div key={index} className="mb-4">
                <h3 className="font-semibold">{article.title}</h3>
                {article.urlToImage && (
                            <img src={article.urlToImage} alt={article.title} className="w-full h-auto" />
                        )}
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        ))}
    </div>
    );
};

export default NewsComponent;