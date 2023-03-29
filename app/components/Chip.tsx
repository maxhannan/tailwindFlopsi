export interface Props {
  content: string;
}

const Chip = (props: Props) => {
  return (
    <div className="flex justify-center items-center font-medium py-2 px-2 rounded-full text-blue-700 bg-blue-100 border border-blue-300 ">
      <div className="text-sm font-normal leading-none max-w-full flex-initial">
        {props.content}
      </div>
    </div>
  );
};

export default Chip;
