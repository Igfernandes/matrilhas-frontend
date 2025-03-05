import { UseFormRegister } from "react-hook-form";
import { ServicesPayload } from "./schemas";
import i18n from "@configs/i18n";
import { Select } from "@components/shared/forms/Select";
import { Input } from "@components/shared/forms/Input";
import { TextArea } from "@components/shared/forms/TextArea";

type Props = {
  register: UseFormRegister<ServicesPayload>;
};

export function DefinitionsForm({ register }: Props) {
  return (
    <>
      <div className="form-row flex  justify-between">
        <div className="form-select w-full lg:w-[48%]">
          <Select
            dataTestId="type"
            label={i18n(`words.service_type`)}
            options={[
              {
                text: "Recorrente",
                value: "APPELLANT",
              },
              {
                text: "Pontual",
                value: "PUNCTUAL",
              },
            ]}
            required={true}
          />
        </div>
        <div className="form-group w-full lg:w-[48%]">
          <Input
            {...register("name")}
            dataTestId="name"
            label={i18n("words.service_name")}
            required={true}
          />
        </div>
      </div>
      <div className="form-row mt-6">
        <TextArea
          dataTestId="describe"
          className="h-28"
          label={i18n(`words.describe`)}
        />
      </div>
    </>
  );
}
