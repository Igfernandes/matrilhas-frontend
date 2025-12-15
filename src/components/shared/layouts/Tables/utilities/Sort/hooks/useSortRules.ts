import { useCallback, useState } from "react";
import { SortShape } from "../type";

type Props = {
  sortInstance?: SortShape;
};

export function useSortRules({ sortInstance }: Props) {
  const [sort, setSort] = useState<SortShape>(
    sortInstance ?? {
      reference: "",
      type: "ASC",
    }
  );
  const handleChangeSort = useCallback(() => {
    setSort({
      ...sort,
      type: sort.type == "ASC" ? "DESC" : "ASC",
    });
  }, [sort]);

  return {
    handleChangeSort,
    sort,
  };
}
