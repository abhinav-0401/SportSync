import React from 'react';

interface Props {
  active: boolean;
  name: string;
  onClick: () => void;
}

const HorizontalTag: React.FC<Props> = ({ active, name, onClick }) => {
  return (
    <div
      className={active ? "py-2 dark:bg-[#45474A] py-auto dark:text-[#E6E6DD] px-4 text-sm xl:text-base rounded-full text-center w-fit bg-white font-medium text-[#45474A] cursor-pointer" : "py-2 py-auto dark:text-[#E6E6DD] px-4 text-sm border border-[#45474A33]/20 xl:text-base rounded-full text-center w-fit font-medium text-[#45474A] cursor-pointer"}
      onClick={onClick}
    >
      {name}
    </div>
  );
};

export default HorizontalTag;
