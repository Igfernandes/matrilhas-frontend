import dayjs from "dayjs";

type Props = {
  lines?: number;
};

export function TextSkeleton({ lines = 1 }: Props) {

  return (
    <div>
      {Array.from({ length: lines }).map(() => (
        <div
          key={`skeleton_text_${dayjs().unix()}`}
          className={`skeleton w-full h-[2rem]  my-2`}
        ></div>
      ))}
    </div>

  );
}
