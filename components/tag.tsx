interface Props {
  name: string;
}

export default function Tag({ name }: Props) {
  return (
    <div className="py-0.5 dark:bg-[#45474A] py-auto dark:text-[#E6E6DD] px-3 text-sm xl:text-base rounded-full text-center w-fit bg-white font-medium text-[#45474A]">
      {name}
    </div>
  );
}