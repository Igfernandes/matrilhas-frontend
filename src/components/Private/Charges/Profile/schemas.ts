import i18n from "@configs/i18n";
import { TFunction } from "@contexts/I18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const ChargeUpdateSchema = (t: TFunction) =>
  z.object({
    title: z.string({ required_error: t("Validations.required") }).min(3, {
      message: (t("Validations.min_length") as string)
        .replace("${field}", t("Words.name"))
        .replace("${length}", "3"),
    }),
    status: z.enum(["ACTIVE", "INACTIVE"], {
      message: t("Validations.enum", {
        list: "ACTIVE, INACTIVE",
      }),
    }),
    type: z.enum(["APPELLANT", "PUNCTUAL"], {
      message: t("Validations.enum", {
        list: "APPELLANT, PUNCTUAL",
      }),
    }),
    privacy: z.enum(["PUBLIC", "PRIVATE"], {
      message: t("Validations.enum", {
        list: "PUBLIC, PRIVATE",
      }),
    }),
    period: z.number({ required_error: i18n("Validations.required") }),
    expired_days: z.number({ required_error: i18n("Validations.required") }),
    started_at: z.string({ required_error: i18n("Validations.required") }),
    amount: optionalNumber(i18n("Validations.required")),
    price: z.number({ required_error: i18n("Validations.required") }),
    promotional_price: z.number({
      required_error: i18n("Validations.required"),
    }),
  });

export type ChargeUpdatePayload = z.infer<ReturnType<typeof ChargeUpdateSchema>>;
