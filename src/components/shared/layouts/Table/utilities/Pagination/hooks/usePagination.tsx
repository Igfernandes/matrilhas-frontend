import { useState } from "react";
import { useTableContext } from "../../../contexts/Table";

export function usePagination() {
  const { handleChangePagination, pagination, tRows } = useTableContext();
  const arrowStyled =
    "bg-primary border-secondary border-2 px-2 text-center py-1 hover:bg-hover-secondary";
  const amountGroups = (pagination.amount ?? 0) / pagination.max;

  const [displayedGroupPage, setDisplayedGroupPage] = useState<number>(1);
  const [displayedPages, setDisplayedPages] = useState<Array<number>>([]);

  const handleChangeDisplayedPages = (nextGroupPage: number) => {
    const pageNumbers = Array(pagination.amount)
      .fill(<></>)
      .map((value, index) => index + 1);

    const nextLastedElementDisplayed = nextGroupPage * pagination.max;

    setDisplayedPages(
      pageNumbers.slice(
        nextLastedElementDisplayed - pagination.max,
        nextLastedElementDisplayed
      )
    );
  };

  const handleChangeDisplayedGroupPage = (nextGroupPage: number) => {
    setDisplayedGroupPage(nextGroupPage);
  };

  return {
    arrowStyled,
    amountGroups,
    displayedGroupPage,
    displayedPages,
    handleChangePagination,
    pagination,
    handleChangeDisplayedGroupPage,
    handleChangeDisplayedPages,
    tRows,
  };
}
