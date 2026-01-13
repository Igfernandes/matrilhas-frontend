import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const DispatchersSchema = (t: TFunction) =>
  z
    .object({
      title: z.string({ required_error: t("Validations.required") }).min(3, {
        message: t("Validations.min_length", {
          length: "3",
          field: t("Words.name"),
        }) as string,
      }),
      weekday: z
        .array(
          z
            .enum(
              [
                "SUNDAY",
                "MONDAY",
                "TUESDAY",
                "WEDNESDAY",
                "THURSDAY",
                "FRIDAY",
                "SATURDAY",
              ],
              {
                message: t("Validations.enum", {
                  field: t("Words.weekdays"),
                  list: "SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY",
                }),
              }
            )
            .or(z.boolean())
        )
        .optional(),
      period: z
        .enum(["DAILY", "WEEKLY", "MONTHLY"], {
          message: t("Validations.enum", {
            field: t("Words.period"),
            list: "DAILY, WEEKLY, MONTHLY",
          }),
        })
        .or(z.string())
        .optional(),
      content: z
        .string({ required_error: t("Validations.required") })
        .optional(),
      platforms: z.array(
        z
          .enum(["FACEBOOK", "INSTAGRAM", "WHATSAPP", "EMAIL", "SMS"], {
            message: t("Validations.enum", {
              field: t("Words.platforms"),
              list: "FACEBOOK, INSTAGRAM, WHATSAPP, EMAIL, SMS",
            }),
          })
          .or(z.boolean())
          .or(z.null())
      ),
      scheduled_day: z
        .string()
        .min(1, {
          message: t("Validations.min_length", {
            field: t("Words.scheduled_day"),
            length: "3",
          }) as string,
        })
        .max(31, {
          message: t("Validations.max_length", {
            field: t("Words.scheduled_day"),
            length: "3",
          }),
        })
        .optional(),
      client_ids: z
        .preprocess(
          (value) => {
            if (!Array.isArray(value)) return [];

            return value
              .filter((v) => !!v || v > 0)
              .map((v) => Number(v))
          },
          z.array(
            z
              .number({
                message: t("Validations.required"),
              })
              .int()
          )
        ),
      image: z.string().optional(),
      started_at: z.string().optional(),
      isLoading: z.boolean().optional(),
      all_clients: z.boolean().optional(),
    })
    .superRefine((data, ctx) => {
      const availablePlatforms = data.platforms.filter(
        (platform) => !!platform
      );
      if (availablePlatforms.length == 0)
        return ctx.addIssue({
          path: ["platforms"],
          message: t("Validations.required"),
          code: z.ZodIssueCode.custom,
        });
    });

export type FormsPayload = z.infer<ReturnType<typeof DispatchersSchema>>;
