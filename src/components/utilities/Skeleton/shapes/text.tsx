
type Props = {
  lines?: number;
  index?: string;
};

export function TextSkeleton({ index = "_", lines = 1 }: Props) {

  return (
    <div>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={`skeleton_${index}_text_${i}`}
          className={`skeleton w-full h-[2rem]  my-2`}
        ></div>
      ))}
    </div>

  );
}
