// components/ArticleCard.tsx
import Image from 'next/image';
import React from 'react';

interface ArticleCardProps {
    title: string;
    description: string;
    date: string;
    imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, description, date, imageUrl }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-5 p-5 relative bg-white/66 rounded-xl border border-solid border-gray-300/66 mx-4 md:mx-24 shadow-lg">
            <div className="relative w-full md:w-48 md:h-32 flex-none">
                <Image src={imageUrl} alt={title} layout='fill' objectFit='cover' />
            </div>
            <div className="flex flex-col flex-grow gap-2">
                <div className="text-xl md:text-2xl font-semibold text-black">{title}</div>
                <p className="text-gray-700">{description}</p>
                <div className="text-sm font-semibold text-gray-700">{date}</div>
            </div>
        </div>
    );
};

export default ArticleCard;
