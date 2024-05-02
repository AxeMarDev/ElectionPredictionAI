import React from 'react';

interface VideoEmbedProps {
    videoId: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId }) => {
    return (
        <div className="aspect-w-16 aspect-h-5 md:w-5/6 mx-auto">
        <iframe 
            className="border-solid border-2 border-gray-500 rounded-lg mt-3 mb-3"
            // width="100%" 
            // height="100%" 
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
        </div>

        
    );
};

export default VideoEmbed;