import { useDebounced } from "@hooks/useDebounced";
import { GroupCheckAjaxRefShape, GroupCheckItemShape } from "../type";
import useGetGroupChecks from "./useGet";
import {
  ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Props = {
  url?: string;
  data: Array<GroupCheckItemShape>;
  key?: string;
  ref?: GroupCheckAjaxRefShape;
};

export function useGroupChecks({ data, key, url, ref }: Props) {
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounced(search, 400);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const {
    rows,
    count,
    refetch,
    isPending: isLoading,
    isSuccess,
  } = useGetGroupChecks(
    {
      [ref?.queryIndex as keyof typeof key]: debouncedSearch,
      limit: 500,
      start: 0 + offset,
    },
    data.length === 0 ? url : "",
    key
  );
  const itemsRef = useRef<Array<GroupCheckItemShape>>([]);
  const appendRows = useCallback(
    (prev: Array<GroupCheckItemShape>, newRows: Array<GroupCheckItemShape>) => {
      const map = new Map<unknown, unknown>();

      prev.forEach((item, key) => map.set(item?.value ?? rows[key]?.id, item));
      newRows.forEach((item: GroupCheckItemShape, key) =>
        map.set(item?.value ?? rows[key]?.id, item)
      );

      return Array.from(map.values()) as Array<GroupCheckItemShape>;
    },
    [rows]
  );

  const items = useMemo(() => {
    let items = data;

    if (data.length === 0)
      items = rows.map((item) => ({
        label: item[ref?.label as keyof typeof item],
        value: item[ref?.value as keyof typeof item],
      })) as Array<GroupCheckItemShape>;

    itemsRef.current = appendRows(itemsRef.current, items);
    return itemsRef.current.filter((item) => {
      if (search === "") return true;
      return item.label.toString().toLowerCase().includes(search.toLowerCase());
    });
  }, [rows, ref, data, search, appendRows]);

  const handleScroll = useCallback(
    (container: HTMLDivElement) => {
      if (!url || !key) return;
      const { scrollTop, clientHeight, scrollHeight } = container;

      if (
        scrollTop + clientHeight < scrollHeight - 100 ||
        itemsRef.current.length >= count
      )
        return;

      setOffset((prev) => prev + 500);
      refetch();
    },
    [itemsRef, count, url, key, refetch]
  );

  const handleSearch = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    setSearch(ev.currentTarget.value);
  }, []);

  const isChecked = useCallback(
    (list: Array<unknown>, index: number, value: unknown) => {
      if (!list || !list[index]) return false;

      return list[index] == value;
    },
    []
  );

  useEffect(() => {
    if (isSuccess) setIsInitialLoad(false);
  }, [isSuccess]);

  return {
    items,
    handleScroll,
    handleSearch,
    isInitialLoad,
    isLoading,
    isChecked,
  };
}
