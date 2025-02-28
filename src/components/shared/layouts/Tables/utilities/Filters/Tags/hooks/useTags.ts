import { useTableContext } from "@components/shared/layouts/Tables/contexts/Table";
import { TagProps } from "../type";
import { useEffect, useRef, useState } from "react";
import { TableDataShape } from "@components/shared/layouts/Seletor/contexts/types";

type Props<TableData> = TagProps<TableData>;
type TagsShape = {
  text: string;
  amount: number;
};

export function useTags<TableData extends Array<Record<string, unknown>>>({
  column,
  data,
}: Props<TableData>) {
  const [tags, setTags] = useState<TagsShape[]>([]);
  const { handleChangeFilters, handleChangeEvent } = useTableContext();

  const totalTags = useRef<number>(0);

  const getListTags = () => {
    const tagsFiltered: Record<string, number> = {};

    for (const entity of data) {
      const propName = entity[column] as string;
      if (!propName) continue;

      if (!tagsFiltered[propName] && tagsFiltered[propName] != 0)
        tagsFiltered[propName] = 1;
      else tagsFiltered[propName] += 1;
    }
    const tagKeys = Object.keys(tagsFiltered);

    setTags(
      tagKeys.map((key) => ({
        amount: tagsFiltered[key],
        text: key,
      }))
    );
  };

  const handleFilterByTag = (
    data: TableDataShape,
    tag: string
  ): TableDataShape => {
    if (!tag) return data;

    return data.filter((entity) => Object.values(entity).includes(tag));
  };

  const handleChangeTargetTag = (tag: string) => {
    handleChangeFilters({
      tags: (data: TableDataShape) => handleFilterByTag(data, tag),
    });
    handleChangeEvent(true);
  };

  useEffect(() => {
    getListTags();
  }, [data]);

  useEffect(() => {
    totalTags.current = tags.reduce(
      (totalTags, tag) => totalTags + tag.amount,
      0
    );
  }, [tags]);

  return {
    tags,
    totalTags,
    handleFilterByTag,
    handleChangeTargetTag,
  };
}
