import i18n from "@configs/i18n";
import { useTags } from "./hooks/useTags";
import { TagProps } from "./type";

export function Tags<TableData extends Array<Record<string, unknown>>>(
  props: TagProps<TableData>
) {
  const { tags, totalTags, handleChangeTargetTag } = useTags<TableData>(props);

  return (
    <ul className="flex mx-4">
      <li
        className="border-[1px] border-secondary px-3 rounded-xl cursor-pointer mx-[.25rem]"
        onClick={() => handleChangeTargetTag("")}
      >
        <span className="uppercase font-semibold text-xs">
          {`${i18n("words.all")} (${totalTags.current})`}{" "}
        </span>
      </li>
      {tags.map((tag) => (
        <li
          key={`tag_${tag.text}`}
          className="border-[1px] border-secondary px-3 rounded-xl cursor-pointer mx-[.25rem]"
          onClick={() => handleChangeTargetTag(tag.text)}
        >
          <span className="uppercase font-semibold text-xs">{`${tag.text} (${tag.amount})`}</span>
        </li>
      ))}
    </ul>
  );
}
