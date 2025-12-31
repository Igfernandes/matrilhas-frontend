import i18n from "@configs/i18n";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const TourProfileSchema = z.object({
  id: z.number().optional(),
  title: z
    .string({ required_error: i18n("Validations.string") })
    .min(1, {
      message: i18n("Validations.min_length", {
        field: i18n("Words.title"),
        length: "1",
      }),
    })
    .max(200, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.title"),
        length: "200",
      }),
    }),

  slug: z
    .string({ required_error: i18n("Validations.tours.invalid.slug") })
    .min(1, {
      message: i18n("Validations.min_length", {
        field: "slug",
        length: "1",
      }),
    })
    .max(30, {
      message: i18n("Validations.max_length", {
        field: "slug",
        length: "30",
      }),
    }),

  banner: z.string().optional().or(z.literal("")),

  description: z
    .string()
    .max(5000, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.description"),
        length: "5000",
      }),
    })
    .optional()
    .or(z.literal("")),

  short_description: z
    .string({ required_error: i18n("Validations.string") })
    .max(200, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.short_description"),
        length: "200",
      }),
    })
    .optional()
    .or(z.literal("")),

  price: z.number({
    required_error: i18n("Validations.number"),
    invalid_type_error: i18n("Validations.number"),
  }),

  promotional_price: optionalNumber(i18n("Validations.number")),

  currency: z
    .enum(["REAL", "USD", "EURO"], {
      required_error: i18n("Validations.list", {
        field: i18n("Words.currency"),
        list: "REAL, USD, EURO",
      }),
    })
    .default("REAL"),

  available_at: z
    .string({ message: i18n("Validations.string") })
    .optional()
    .or(z.literal("")),

  unavailable_at: z
    .string({ message: i18n("Validations.string") })
    .optional()
    .or(z.literal("")),

  video: z.string().optional().or(z.literal("")),

  rating: z.any().optional(),

  slots: z
    .number({
      invalid_type_error: i18n("Api.tours.invalid.slots"),
    })
    .optional(),

  featured: z
    .enum(["1", "0"], {
      required_error: i18n("Validations.list", {
        field: i18n("Words.featured"),
        list: "Sim, Não",
      }),
    })
    .default("0"),

  status: z
    .enum(["PUBLISHED", "DRAFT", "ARCHIVED"], {
      invalid_type_error: i18n("Api.tours.invalid.status"),
    })
    .default("DRAFT"),
});

export type TourProfilePayload = z.infer<typeof TourProfileSchema>;
