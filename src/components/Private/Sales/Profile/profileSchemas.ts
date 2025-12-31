import i18n from "@configs/i18n";
import { REGEXES } from "@constants/regexes";
import { optionalNumber } from "@helpers/numbers";
import { z } from "zod";

export const SaleProfileSchema = z.object({
  id: z.number({ required_error: i18n("Validations.required") }).optional(),
  reference: z
    .string({ required_error: i18n("Validations.required") })
    .min(3, {
      message: i18n("Validations.min_length", {
        field: i18n("Words.reference"),
        length: "3",
      }),
    })
    .max(150, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.reference"),
        length: "150",
      }),
    }),
  boarding: z.string({ required_error: i18n("Validations.required") }),
  landing: z.string({ required_error: i18n("Validations.required") }),
  payment_id: z
    .string({ required_error: i18n("Validations.required") })
    .max(150, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.reference"),
        length: "150",
      }),
    }),
  price: optionalNumber(),
  currency: z
    .enum(["REAL", "USD", "EURO"], {
      required_error: i18n("Validations.required"),
    })
    .default("REAL"),
  discount: optionalNumber(),
  status: z
    .enum(["PENDING", "PAID", "CANCELED"], {
      required_error: i18n("Validations.required"),
    })
    .default("PENDING"),
  name: z
    .string({ required_error: i18n("Validations.required") })
    .min(3, {
      message: i18n("Validations.min_length", {
        field: i18n("Words.name"),
        length: "3",
      }),
    })
    .max(150, {
      message: i18n("Validations.max_length", {
        field: i18n("Words.name"),
        length: "150",
      }),
    }),
  email: z
    .string({ required_error: i18n("Validations.required") })
    .refine((email) => email === "" || REGEXES.EMAIL.test(`${email}`), {
      message: i18n("Validations.email"),
    }),
  phone: z.string({ required_error: i18n("Validations.required") }),
  cpf: z
    .string({ required_error: i18n("Validations.required") })
    .nonempty(i18n("Validations.required")),
  birthdate: z
    .string({ required_error: i18n("Validations.required") })
    .nonempty(i18n("Validations.required")),
  dependents: z.array(
    z.object({
      name: z
        .string({ required_error: i18n("Validations.required") })
        .min(3, {
          message: i18n("Validations.min_length", {
            field: i18n("Words.name"),
            length: "3",
          }),
        })
        .max(150, {
          message: i18n("Validations.max_length", {
            field: i18n("Words.name"),
            length: "150",
          }),
        }),
      cpf: z
        .string({ required_error: i18n("Validations.required") })
        .min(3, {
          message: i18n("Validations.min_length", {
            field: i18n("Words.cpf"),
            length: "3",
          }),
        })
        .max(22, {
          message: i18n("Validations.max_length", {
            field: i18n("Words.cpf"),
            length: "22",
          }),
        }),
      birthdate: z
        .string({ required_error: i18n("Validations.required") })
        .min(3, {
          message: i18n("Validations.min_length", {
            field: i18n("Words.birthdate"),
            length: "3",
          }),
        })
        .max(22, {
          message: i18n("Validations.max_length", {
            field: i18n("Words.birthdate"),
            length: "22",
          }),
        }),
    })
  ),
  contact: z.object({
    name: z
      .string({ required_error: i18n("Validations.required") })
      .min(3, {
        message: i18n("Validations.min_length", {
          field: i18n("Words.name"),
          length: "3",
        }),
      })
      .max(150, {
        message: i18n("Validations.max_length", {
          field: i18n("Words.name"),
          length: "150",
        }),
      }),
    phone: z
      .string({ required_error: i18n("Validations.required") })
      .min(3, {
        message: i18n("Validations.min_length", {
          field: i18n("Words.package"),
          length: "3",
        }),
      })
      .max(22, {
        message: i18n("Validations.max_length", {
          field: i18n("Words.cpf"),
          length: "22",
        }),
      }),
    relation: z
      .string({ required_error: i18n("Validations.required") })
      .min(3, {
        message: i18n("Validations.min_length", {
          field: i18n("Words.relation"),
          length: "3",
        }),
      })
      .max(22, {
        message: i18n("Validations.max_length", {
          field: i18n("Words.birthdate"),
          length: "22",
        }),
      }),
  }),
  country: z.string({ required_error: i18n("Validations.required") }),
  state: z.string({ required_error: i18n("Validations.required") }),
  city: z.string({ required_error: i18n("Validations.required") }),
  agency_id: z
    .number({ required_error: i18n("Validations.required") })
    .optional(),
  tour_id: z.number({ required_error: i18n("Validations.required") }),
  created_at: z.string().optional(),
});

export type SaleProfilePayload = z.infer<typeof SaleProfileSchema>;
