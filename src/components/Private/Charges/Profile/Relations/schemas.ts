import { z } from "zod";

export const ChargeRelationsSchema = z.object({
  client_ids: z
    .preprocess((value) => {
      if (!Array.isArray(value)) return [];

      return value
        .map((v) => (!!v ? Number(v) : v))
        .filter((v) => Number.isInteger(v));
    }, z.array(z.number().int()))
    .optional(),
  agency_ids: z
    .preprocess((value) => {
      if (!Array.isArray(value)) return [];

      return value
        .map((v) => (!!v ? Number(v) : v))
        .filter((v) => Number.isInteger(v));
    }, z.array(z.number().int()))
    .optional(),
});

export type ChargesRelationsPayload = z.infer<typeof ChargeRelationsSchema>;
