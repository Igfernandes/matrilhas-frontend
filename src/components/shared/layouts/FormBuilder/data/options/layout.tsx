import { Pen } from "@assets/Icons/black/Pen";
import { OptionData } from "../../type";
import { SettingsLayoutTab } from "../../parts/Modal/tabs/Settings/LayoutTab";
import { SizesTab } from "../../parts/Modal/tabs/SizesTab";

export const optionsLayout = [
  {
    id: "paragraph",
    field: "paragraph",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "title",
    field: "title",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "span",
    field: "span",
    icon: <Pen width={12} height={12} />,
  },
  {
    id: "hr",
    field: "hr",
    hiddenSettings: true,
    icon: <Pen width={12} height={12} />,
  },
].map((option) => ({
  ...option,
  element: "TEXT",
  editTabs: [
    {
      name: "settings",
      component: SettingsLayoutTab,
    },
    {
      name: "sizes",
      component: SizesTab,
    },
  ],
})) as Array<OptionData>;
