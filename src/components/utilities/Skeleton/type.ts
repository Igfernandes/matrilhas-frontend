import { SkeletonShapes } from "./shapes";

export type SkeletonSettings = {
  type: keyof typeof SkeletonShapes;
  amount?: number;
  lines?: number;
};
