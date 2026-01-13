import { TextEdit } from "@components/shared/forms/TextEdit";
import { Checkbox } from "@components/shared/forms/Checkbox";
import { useFormContext } from "react-hook-form";
import { FormsPayload } from "../schema";
import { CheckList } from "../CheckList";
import { useI18n } from "@contexts/I18n";


export function Send() {
  const { t } = useI18n()
  const { register, getValues } = useFormContext<FormsPayload>();

  return (
    <div>
      <div className="mb-6 md:mb-4">
        <TextEdit
          name="content"
          defaultValue={getValues("content") ?? ""}
          label={t("Words.message")}
          dataTestId="overlay_text"
          style={{
            minHeight: "400px",
          }}
        />
      </div>
      <CheckList />
      <div className=" mt-6">
        <Checkbox
          {...register("all_clients")}
          dataTestId="all_clients"
          label={t("Screens.dashboard.dispatchers.send_to_all_clients")}
        />
      </div>
    </div>
  );
}
