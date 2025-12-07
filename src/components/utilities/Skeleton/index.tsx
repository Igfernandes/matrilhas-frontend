import { When } from "@components/utilities/When";
import { SkeletonShapes } from "./shapes";
import { SkeletonSettings } from "./type";

type Props = {
  isLoading: boolean;
  children: React.ReactNode;
  settings?: SkeletonSettings;
};

export function Skeleton({
  isLoading,
  children,
  settings = { type: "boxes" },
}: Props) {
  const Shape = SkeletonShapes[settings.type];

  return (
    <>
      <When value={!isLoading}>{children}</When>
      <When value={isLoading}>
        <Shape {...settings} />
      </When>
    </>
  );
}
