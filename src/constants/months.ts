import i18n from "@configs/i18n";

export const MONTHS: Month[] = [
  {
    title: i18n("Words.january"),
    value: 1,
  },
  {
    title: i18n("Words.february"),
    value: 2,
  },
  {
    title: i18n("Words.march"),
    value: 3,
  },
  {
    title: i18n("Words.april"),
    value: 4,
  },
  {
    title: i18n("Words.may"),
    value: 5,
  },
  {
    title: i18n("Words.june"),
    value: 6,
  },
  {
    title: i18n("Words.july"),
    value: 7,
  },
  {
    title: i18n("Words.august"),
    value: 8,
  },
  {
    title: i18n("Words.september"),
    value: 9,
  },
  {
    title: i18n("Words.october"),
    value: 10,
  },
  {
    title: i18n("Words.november"),
    value: 11,
  },
  {
    title: i18n("Words.december"),
    value: 12,
  },
];

export type Month = {
  title: string;
  value: number;
};
