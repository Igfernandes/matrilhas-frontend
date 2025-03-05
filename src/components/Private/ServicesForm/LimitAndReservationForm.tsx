import { Input } from "@components/shared/forms/Input";
import { Radio } from "@components/shared/forms/Radio";
import i18n from "@configs/i18n";
import { ServicesPayload } from "./schemas";
import { UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<ServicesPayload>;
};

export function LimitAndReservationForm({ register }: Props) {
  return (
    <>
      <div className="my-6 flex">
        <div>
          <p>{i18n(`services.has_limit_vacancies`)}</p>
        </div>
        <div className="flex">
          <div className="mx-1">
            <Radio
              {...register("disabledLimitVacancies")}
              dataTestId="disabled_limit_vacancies_yes"
              label={i18n(`words.yes`)}
            />
          </div>
          <div className="mx-1">
            <Radio
              {...register("disabledLimitVacancies")}
              dataTestId="disabled_limit_vacancies_no"
              defaultChecked={true}
              label={i18n(`words.not`)}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <Input
          type="number"
          dataTestId="limit_vacancies"
          label={i18n("services.inform_limit_vacancies")}
          disabled={true}
        />
      </div>
      <div className="my-6 flex">
        <div>
          <p>{i18n(`services.has_limit_reservation`)}</p>
        </div>
        <div className="flex">
          <div className="mx-1">
            <Radio
              {...register("disabledReservationVacancies")}
              dataTestId="disabled_reservation_vacancies_yes"
              label={i18n(`words.yes`)}
            />
          </div>
          <div className="mx-1">
            <Radio
              {...register("disabledReservationVacancies")}
              dataTestId="disabled_reservation_vacancies_no"
              defaultChecked={true}
              label={i18n(`words.not`)}
            />
          </div>
        </div>
      </div>
      <div className="my-6">
        <Input
          type="number"
          dataTestId="limit_vacancies"
          label={i18n("services.inform_limit_reservation")}
          disabled={true}
        />
      </div>
    </>
  );
}
