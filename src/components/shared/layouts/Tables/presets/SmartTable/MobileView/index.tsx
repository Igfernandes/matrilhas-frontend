import React, { ReactNode } from "react";
import { Accordion } from "../../../../Accordion";
import { AccordionItemHeader } from "../../../../Accordion/AccordionItemHeader";
import { AccordionItem } from "../../../../Accordion/AccordionItem";
import { useTableContext } from "../../../contexts/table";
import { AccordionItemContent } from "../../../../Accordion/AccordionItemContent";

type Props = {
  tHeaders: Array<string>;
};

export function MobileView({ tHeaders }: Props) {
  const { paginatedTRows } = useTableContext();

  return (
    <Accordion>
      {paginatedTRows.map((row) => {
        const [id, ...data] = row;
        const actions = data.pop(); // Último item como ações
        const filteredId = React.isValidElement(id)
          ? (id.props as Record<string, number>)["value"]
          : (id as number);

        return (
          <AccordionItem key={`accordion_item_${filteredId}`}>
            <AccordionItemHeader
              accordionId={filteredId}
              title={`${filteredId} - ${data[0] as ReactNode}`}
            />
            <AccordionItemContent accordionId={filteredId as number}>
              <div className="relative">
                <ul className="bg-secondary p-2 pr-4">
                  {data.map((cell, cellIndex) => (
                    <li
                      key={`accordion_item__${filteredId}_${cellIndex}`}
                      className="text-sm my-3"
                    >
                      <strong>{`${tHeaders[cellIndex + 1]}:`}</strong>
                      <span className="ml-2">{cell as ReactNode}</span>
                    </li>
                  ))}
                </ul>
                <div className="absolute top-2 right-0 z-10 scale-[110%]">
                  {actions as ReactNode}
                </div>
              </div>
            </AccordionItemContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
