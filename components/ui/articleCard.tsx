"use client"

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
        <div className="flex w-full flex-row md:max-w-fit lg:min-w-full gap-2 ab:gap-5 p-2 sm:p-5 hover:bg-[#45474a80] cursor-pointer bg-white/66 rounded-xl border border-solid border-gray-300/66 shadow-lg">
            <div className="flex md:min-w-fit w-1/3">
                <Image src={imageUrl} className='md:min-h-full md:max-w-full w-36' alt={title} width={300} height={200} unoptimized />
            </div>
            <div className="flex flex-col gap-2 w-2/3">
                <div className="text-xs sm:text-xl md:text-2xl font-semibold dark:text-[#E6E6DD] text-black">{title}</div>
                <p className="text-gray-700 h-[110px] italic text-ellipsis dark:text-[#E6E6DD] overflow-y-hidden text-[10px] sm:text-base">{description}</p>
                {/* <span className='text-[10px] sm:text-base md:hidden'>...</span>
                <div className="text-xs sm:text-sm font-semibold dark:text-[#E6E6DD] text-gray-700">{date}</div> */}
            </div>
        </div>
    );
};

export default ArticleCard;
