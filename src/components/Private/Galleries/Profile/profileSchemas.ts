import i18n from "@configs/i18n";
import { z } from "zod";

export const GalleryProfileSchema = z.object({
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
  cover: z.string().optional(),
  status: z
    .enum(["PUBLISHED", "DRAFT"], {
      invalid_type_error: i18n("Api.tours.invalid.status"),
    })
    .default("DRAFT"),
});

export type GalleryProfilePayload = z.infer<typeof GalleryProfileSchema>;
