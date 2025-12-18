import { z } from "zod";

export const RulesSchema = z.object({
  upload: z.any().optional(),
});

export type RulesPayload = z.infer<typeof RulesSchema>;
