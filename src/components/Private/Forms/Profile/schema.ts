import i18n from "@configs/i18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const formsSchema = z
  .object({
    id: z.number().optional(),

    name: z
      .string({ required_error: i18n("Validations.required") })
      .min(3, {
        message: i18n("Validations.min_length", {
          field: i18n("Words.name"),
          length: "3",
        }),
      })
      .max(200, {
        message: i18n("Validations.max_length", {
          field: i18n("Words.name"),
          length: "200",
        }),
      }),

    slug: z.string().max(250).optional(),

    status: z.enum(["PUBLISHED", "DRAFT"], {
      required_error: i18n("Validations.required"),
    }),

    stock: z
      .number({ required_error: i18n("Validations.required") })
      .int()
      .min(0, {
        message: i18n("Validations.min_value", {
          field: i18n("Words.stock"),
          value: "0",
        }),
      })
      .default(0),
    template: optionalNumber(),
    category: optionalNumber(),
    color_mark: z
      .string()
      .max(10, {
        message: i18n("Validations.max_length", {
          field: i18n("Words.color"),
          length: "10",
        }),
      })
      .nullable()
      .optional(),

    thanks_message: z.string().nullable().optional(),

    description: z.string().nullable().optional(),

    started_at: z
      .string(),
    expired_at: z
      .string(),
  })
  .refine((data) => new Date(data.expired_at) > new Date(data.started_at), {
    message: i18n("Validations.invalid_date_range"),
    path: ["expired_at"],
  });

export type FormsPayload = z.infer<typeof formsSchema>;
