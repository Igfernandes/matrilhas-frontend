import { TFunction } from "@contexts/I18n";
import { z } from "zod";

export const ImportSchema = (t: TFunction) => z.object({
  excel: z
    .custom<FileList>(
      (files) => files instanceof FileList && files.length > 0,
      {
        message: t("Validations.file_required"),
      }
    )
    .refine(
      (files) => {
        const file = files[0];
        if (!file) return false;
        // valida extensão
        const validExt = /\.(xls|xlsx)$/i.test(file.name);
        // valida MIME type
        const validMime =
          file.type === "application/vnd.ms-excel" ||
          file.type ===
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
        return validExt && validMime;
      },
      {
        message: t("Validations.file_excel_only"),
      }
    ),
});

export type ImportPayload = z.infer<ReturnType<typeof ImportSchema>>;
