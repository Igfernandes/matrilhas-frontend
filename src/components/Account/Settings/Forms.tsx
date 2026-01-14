import { bgColors } from "@assets/colors/colors";
import { useForms } from "./hooks/useForms";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import { TInput } from "@components/shared/forms/InfoBoard/fields/Input";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ModalAlterPassword } from "./modals/AlterPassword";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";

import { TPhone } from "@components/shared/forms/InfoBoard/fields/Phone";
import { getCPFFormatted } from "@helpers/string";
import { useI18n } from "@contexts/I18n";
import { TEmail } from "@components/shared/forms/InfoBoard/fields/Email";
import { Button } from "@components/shared/layouts/Button";

dayjs.extend(customParseFormat);

export function AccountSettingsForms() {
  const { t } = useI18n()
  const {
    formMethods,
    submit,
    clientAuth,
    errors,
    handleToggleModal,
    isShowModal,
    isPending,
  } = useForms();

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/2 mb-6">
          <h1 className="text-2xl"><strong>{t("Words.setting")}</strong></h1>
        </div>
        <div className="w-full md:w-[10rem]">
          <Button text={t("Texts.alter_password")}
            onClick={() => handleToggleModal(true)} className="bg-primary font-semibold w-full text-white" />
        </div>
      </div>
      <InfoBoard
        formMethods={formMethods}
        submit={submit}
        isLoading={isPending}
      >
        <TInput
          label={t("Words.name")}
          name={"name"}
          dataTestId="name"
          errors={errors.name?.message}
          defaultValue={clientAuth.name}
        />
        <TSpan
          text={t("Words.cpf")}
          value={getCPFFormatted(clientAuth.cpf)}
          className="bg-white"
          style={{
            background: bgColors.white,
          }}
        />
        <TSpan
          text={t("Words.birthdate")}
          value={dayjs(clientAuth.birthdate).format(t("Configs.format.date"))}
          className="bg-white"
        />
        <TPhone
          label={t("Words.phone")}
          name={"phone"}
          dataTestId="phone"
          errors={errors.phone?.message}
        />
        <TEmail
          label={t("Words.email")}
          dataTestId="email"
          name={"email"}
          errors={errors.email?.message}
        />
        <TInput
          type="password"
          label={t("Words.password")}
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
        handleModal={handleToggleModal}
        isShowModal={isShowModal}
      />
    </div>
  );
}
