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
        <div className="flex md:flex-row max-w-[320px] md:max-w-fit flex-col gap-5 p-5 hover:bg-[#45474a80] cursor-pointer bg-white/66 rounded-xl border border-solid border-gray-300/66 shadow-lg">
            <div className="flex md:min-w-fit">
                <Image src={imageUrl} className='md:min-h-full md:max-w-full' alt={title} width={300} height={200} />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-xl md:text-2xl font-semibold dark:text-[#E6E6DD] text-black">{title}</div>
                <p className="text-gray-700 h-[100px] text-ellipsis dark:text-[#E6E6DD] overflow-y-hidden">{description}</p>
                <span className='md:hidden'>...</span>
                <div className="text-sm font-semibold dark:text-[#E6E6DD] text-gray-700">{date}</div>
            </div>
        </div>
    );
};

export default ArticleCard;
