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
        <div className="flex max-h-[450px] flex-col md:flex-row items-center gap-5 p-5 bg-white/66 rounded-xl border border-solid border-gray-300/66 shadow-lg">
            <div className="min-w-full md:min-w-48 md:min-h-32">
                <Image src={imageUrl} className='md:min-h-full md:w-auto' alt={title} width={300} height={200} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl md:text-2xl font-semibold text-black">{title}</div>
                <p className="text-gray-700 h-[100px] text-ellipsis overflow-y-hidden">{description}</p>
                <span className='md:hidden'>...</span>
                <div className="text-sm font-semibold text-gray-700">{date}</div>
            </div>
        </div>
    );
};

export default ArticleCard;
