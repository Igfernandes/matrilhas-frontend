import { bgColors } from "@assets/colors/colors";
import { useForms } from "./hooks/useForms";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import { TInput } from "@components/shared/forms/InfoBoard/fields/Input";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ModalAlterPassword } from "./modals/AlterPassword";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";
import { TDate } from "@components/shared/forms/InfoBoard/fields/Date";
import { TPhone } from "@components/shared/forms/InfoBoard/fields/Phone";
import { TCpf } from "@components/shared/forms/InfoBoard/fields/Cpf";

dayjs.extend(customParseFormat);

export function SettingsForms() {
  const {
    formMethods,
    submit,
    userAuth,
    errors,
    handleToggleModel,
    isShowModal,
    isPending,
  } = useForms();

  return (
    <div>
      <InfoBoard
        formMethods={formMethods}
        submit={submit}
        isLoading={isPending}
      >
        <TInput
          label={i18n("Words.name")}
          name={"name"}
          dataTestId="name"
          errors={errors.name?.message}
          defaultValue={userAuth.name}
        />
        <TCpf
          label={i18n("Words.cpf")}
          name={"cpf"}
          dataTestId="cpf"
          errors={errors.cpf?.message}
        />
        <TDate
          label={i18n("Words.birthdate")}
          name={"birthdate"}
          dataTestId="birthdate"
          errors={errors.birthdate?.message}
          defaultValue={userAuth.birthdate}
        />
        <TPhone
          label={i18n("Words.phone")}
          name={"phone"}
          dataTestId="phone"
          errors={errors.phone?.message}
        />
        <TSpan
          text={i18n("Words.email")}
          dataTestId="email"
          value={userAuth.email}
          style={{
            background: bgColors.white,
          }}
        />
        <TInput
          type="password"
          label={i18n("Words.password")}
          name={"password"}
          dataTestId="password"
          style={{
            background: bgColors.white,
          }}
          placeholder="************"
          disabled
        />
      </InfoBoard>
      <ModalAlterPassword
        handleModal={handleToggleModel}
        isShowModal={isShowModal}
      />
    </div>
  );
}
