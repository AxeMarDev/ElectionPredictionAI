import React from 'react';
import VideoEmbed from './videoEmbed';

const NewsPage: React.FC = () => {
    return (
        <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold text-center my-4">Latest News</h1>
            {/* Assuming you have a component <NewsFeed /> that displays news articles */}
            <VideoEmbed videoId="YDfiTGGPYCk" /> {/* Example video ID */}
            {/* News articles would be listed here */}
        </div>
    );
};

export default NewsPage;