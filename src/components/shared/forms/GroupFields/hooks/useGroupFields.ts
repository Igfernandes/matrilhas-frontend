import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useRef, useState } from "react";
import { EventDragProps, GroupFieldsDataShape, ItemShape } from "../type";
import { UniqueIdentifier } from "@dnd-kit/core";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import { isEquals } from "@helpers/json";

type Props<Payload> = {
  data: Array<GroupFieldsDataShape>;
  name: Path<Payload>;
};

export function useGroupFields<Payload extends FieldValues>({
  data,
  name,
}: Props<Payload>) {
  const [items, setItems] = useState<ItemShape[]>([]);
  const [targetItem, setTargetItem] = useState<UniqueIdentifier>(-1);
  const {
    register,
    setValue,
    formState: { errors },
    getValues,
  } = useFormContext<Payload>();

  const handleDragEnd = (event: EventDragProps) => {
    const { active, over } = event;

    if (active.id !== over?.id) {
      const updatedItemsValue = handleUpdateItemsValue(items);
      const oldIndex = updatedItemsValue.findIndex(
        (item) => item.id === active.id
      );
      const newIndex = updatedItemsValue.findIndex(
        (item) => item.id === over?.id
      );
      const updatedItems = arrayMove(updatedItemsValue, oldIndex, newIndex);
      setItems(updatedItems);
    }
  };

  const handleUpdateItemsValue = (items: ItemShape[]) => {
    const itemsValue = getValues(name) as ItemShape[];
    return items.map((item, key) => ({
      ...item,
      value: itemsValue[key]?.value ?? "",
    }));
  };

  const handleAddingItem = () => {
    const itemId = items.reduce(
      (acc, item) =>
        typeof item.id === "number" && item.id >= acc ? item.id + 1 : acc,
      0
    );
    const newItem = { id: itemId, value: "" };
    const itemsUpdated = [newItem, ...items];
    setItems(itemsUpdated);
    setTargetItem(itemId);
  };

  const handleChangeItem = (
    id: UniqueIdentifier,
    action: "EDIT" | "DELETE"
  ) => {
    if (action === "DELETE") {
      const itemsFiltered = items.filter((item) => item.id != id);

      return setItems(itemsFiltered);
    }

    setTargetItem(id !== targetItem ? id : -1);
  };

  const handleErrors = () => {
    const fieldsErrors = errors[name] as unknown;
    const arrayFieldsErros = fieldsErrors as [];

    if (!arrayFieldsErros || arrayFieldsErros.length === 0) return "";

    const currentError = arrayFieldsErros.find((field) => !!field);
    if (!currentError) return "";

    /** @ts-expect-error só ignora pf  */
    return currentError.message as string;
  };
  const stableData = useRef(data);

  useEffect(() => {
    const itemsOrganized = stableData.current.sort(
      (a, b) => a.position - b.position
    );
    const initialItems = itemsOrganized.map(({ id, value }) => ({
      id,
      value,
    }));

    setItems(initialItems);
  }, [stableData]);

  useEffect(() => {
    if (isEquals(items, getValues(name))) return;

    setValue(name, items as PathValue<Payload, Path<Payload>>);
  }, [items, setValue, getValues, name]);

  return {
    handleDragEnd,
    items,
    targetItem,
    handleChangeItem,
    handleAddingItem,
    handleErrors,
    errors,
    register,
  };
}
