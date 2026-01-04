type Props = {
  amount?: number;
  index?: string;
};

export function BoxesSkeleton({ index: key = "_", amount = 1 }: Props) {
  const percentage = 100 / amount;

  return (
    <div className="flex justify-start">
      {Array.from({ length: amount }).map((_, index) => (
        <div
          key={`skeleton_${key}_boxes_${index}`}
          className={`skeleton h-[5.5rem] mx-4`}
          style={{ width: `${percentage}%` }}
        ></div>
      ))}
    </div>
  );
}
