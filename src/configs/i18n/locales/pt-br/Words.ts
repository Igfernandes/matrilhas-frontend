import { AddressTranslations } from "./words/address";
import { DateTranslations } from "./words/date";
import { FormsTranslations } from "./words/forms";
import { KinshipTranslations } from "./words/kinship";
import { OthersTranslations } from "./words/others";
import { PersonalTranslations } from "./words/personal";
import { StatusTranslations } from "./words/status";

export const Words = {
  ...KinshipTranslations,
  ...AddressTranslations,
  ...DateTranslations,
  ...PersonalTranslations,
  ...OthersTranslations,
  ...FormsTranslations,
  ...StatusTranslations,
};
