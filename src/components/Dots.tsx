import { Dispatch, SetStateAction } from "react";

const Dots = ({
  imgs,
  imgIndex,
  setImageIndex,
}: {
  imgs: string[];
  imgIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>;
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => setImageIndex(index)}
            className={`h-3 w-3 rounded-full bg-white transition-colors  ${
              index === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          ></button>
        );
      })}
    </div>
  );
};

export default Dots;
