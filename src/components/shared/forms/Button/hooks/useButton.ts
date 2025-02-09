export function useButton() {
  const isBtnSubmit = (type: string = "") => {
    return type == "submit";
  };

  return {
    isBtnSubmit
  };
}
