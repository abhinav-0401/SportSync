import React from 'react';

interface Props {
  active: boolean;
  name: string;
  onClick: () => void;
}

const Tag: React.FC<Props> = ({ active, name, onClick }) => {
  return (
    <div
      className={active ? "py-1 dark:bg-[#45474A] py-auto dark:text-[#E6E6DD] px-3 text-sm xl:text-base rounded-full text-center w-fit bg-[#e6e6dd] font-medium text-[#45474A] cursor-pointer" : "py-1 py-auto dark:text-[#E6E6DD] px-3 text-sm border border-[#45474A33]/20 xl:text-base rounded-full text-center w-fit font-medium text-[#45474A] cursor-pointer"}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default Tag;
