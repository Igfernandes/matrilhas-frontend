import { ReactNode } from "react";
import { Accordion } from "../../../../Accordion";
import { AccordionItemHeader } from "../../../../Accordion/AccordionItemHeader";
import { AccordionItem } from "../../../../Accordion/AccordionItem";
import { useTableContext } from "../../../contexts/Table";
import { AccordionItemContent } from "../../../../Accordion/AccordionItemContent";

type Props = {
  tHeaders: Array<string>;
};

export function MobileView({ tHeaders }: Props) {
  const { paginatedTRows } = useTableContext();

  return (
    <Accordion>
      {paginatedTRows.map((item, key) => (
        <AccordionItem key={`accordion_item_${key}`}>
          <AccordionItemHeader
            accordionId={item[0] as number}
            title={item[0] as ReactNode}
            buttons={item[item.length - 1] as ReactNode}
          />
          <AccordionItemContent accordionId={item[0] as number}>
            <ul className="p-2">
              {item
                .filter((_, index) => ![0, item.length - 1].includes(index))
                .map((item, dataKey) => (
                  <li key={`accordion_item__${key}_${dataKey}`}>
                    <strong>{`${tHeaders[dataKey]}:`}</strong>
                    <span className="ml-2">{item as ReactNode}</span>
                  </li>
                ))}
            </ul>
          </AccordionItemContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
