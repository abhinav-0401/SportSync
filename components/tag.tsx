interface Props {
  name: string;
}

export default function Tag({ name }: Props) {
  return (
    <div className="py-1 px-4 text-sm xl:text-base rounded-full text-center w-fit bg-white font-medium text-[#45474A]">
      {name}
    </div>
  );
}