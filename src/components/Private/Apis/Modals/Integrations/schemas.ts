import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const integrationsSchema = (t: TFunction) =>
  z.object({
    public_token: z
      .string({ required_error: t("Validations.required") })
      .nullable()
      .optional(),
    private_token: z
      .string({ required_error: t("Validations.required") })
      .nullable()
      .optional(),
    name: z.string({ required_error: t("Validations.required") }).optional(),
    status: z.enum(["ACTIVE", "INACTIVE"]).optional(),
  });

export type IntegrationsPayload = z.infer<ReturnType<typeof integrationsSchema>>;
