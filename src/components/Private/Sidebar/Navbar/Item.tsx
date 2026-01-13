"use client";

import { othersColors } from "@assets/colors/colors";
import { When } from "@components/utilities/When";
import Link from "next/link";
import { ItemProps } from "./type";
import { useEffect, useState } from "react";

export function Item({
  menu,
  index,
  isActive,
  sidebarState,
  link,
  Icon,
  title,
}: ItemProps) {
  const [itemStyle, setItemStyle] = useState("#3a3a3a");

  useEffect(() => {
    if (isActive) setItemStyle(othersColors.active);
  }, [isActive]);

  return (
    <li
      onMouseEnter={() => setItemStyle(othersColors.active)}
      onMouseLeave={() =>
        setItemStyle(isActive ? othersColors.active : "#3a3a3a")
      }
      className={`hover:text-red text-xs ${
        index != menu.length - 1 && sidebarState
          ? "border-b-2 border-b-zinc-200"
          : ""
      } py-1 xl:py-2  ${sidebarState ? "px-1" : ""}`}
      style={{
        color: isActive ? othersColors.active : "#3a3a3a",
      }}
    >
      <Link
        href={link ?? "#"}
        className="flex items-center hover:text-active duration-300"
        style={{
          justifyContent: sidebarState ? "initial" : "end",
        }}
      >
        <Icon fill={itemStyle} className="w-5 lg:w-[20px]" />
        <When value={sidebarState}>
          <strong className="ml-2 lg:text-xs">{title}</strong>
        </When>
      </Link>
    </li>
  );
}
