import { arrayMove } from "@dnd-kit/sortable";
import { useEffect, useState } from "react";
import { EventDragProps, GroupFieldsDataShape, ItemShape } from "../type";
import { UniqueIdentifier } from "@dnd-kit/core";
import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";

type Props<Payload> = {
  data: Array<GroupFieldsDataShape>;
  name: Path<Payload>;
};

export function useGroupFields<Payload extends FieldValues>({
  data,
  name,
}: Props<Payload>) {
  const [items, setItems] = useState<ItemShape[]>([]);
  const [targetItem, setTargetItem] = useState<UniqueIdentifier>();
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
      handleUpdateItemsId(updatedItems);
    }
  };
  const handleUpdateItemsValue = (items: ItemShape[]) => {
    const itemsValue = getValues(name);

    return items.map((item, key) => ({
      ...item,
      value: itemsValue[key],
    }));
  };
  const handleUpdateItemsId = (items: ItemShape[]) => {
    setValue(
      name as Path<Payload>,
      items.map((item) => item.value) as PathValue<Payload, Path<Payload>>
    );
  };

  const handleAddingItem = () => {
    const itemId = items.length;
    const newItem = { id: itemId, value: "" };

    setItems([...items, newItem]);
    setTargetItem(itemId);
  };

  const handleChangeItem = (
    id: UniqueIdentifier,
    action: "EDIT" | "DELETE"
  ) => {
    if (action === "DELETE") {
      const itemsFiltered = items.filter((item) => item.id != id);
      handleUpdateItemsId(itemsFiltered);
      return setItems(itemsFiltered);
    }

    setTargetItem(id !== targetItem ? id : undefined);
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

  useEffect(() => {
    setItems(
      data.map(({ value, position }) => ({
        id: position,
        value,
      }))
    );
    setValue(
      name as Path<Payload>,
      items.map((item) => `${item.value}`) as PathValue<Payload, Path<Payload>>
    );
  }, []);

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
