import { useForms } from "../hooks/useForms";
import { InfoBoard } from "@components/shared/forms/InfoBoard/form";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { ChargeShape } from "@type/Charges";
import { FormBoardHeader } from "./header";
import { When } from "@components/utilities/When";
import { useI18n } from "@contexts/I18n";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";

dayjs.extend(customParseFormat);

type Props = {
  charge: ChargeShape;
};

export function FormBoard({ charge }: Props) {
  const { formMethods } =
    useForms({ charge });
  const type = formMethods.watch("type");
  const { t } = useI18n();

  return (
    <div className="bg-white py-7 px-4 rounded-lg">
      <div className="mb-6">
        <FormBoardHeader charge={charge} />
      </div>
      <InfoBoard
        formMethods={formMethods}
      >
        <TSpan
          text={t("Words.name")}
          value={charge.title}
        />

        <When value={type === "APPELLANT"}>
          <TSpan
            text={t("Words.period") + ` (${t("Words.months")})`}
            value={charge.period}
          />
          <TSpan
            text={t("Words.started_at")}
            value={dayjs(charge.started_at).format("DD/MM/YYYY HH:mm")}
          />
        </When>
        <TSpan
          text={t("Words.price")}
          value={`R$: ${charge.price.toFixed(2)}`}
        />
        <When value={!!charge?.promotional_price && charge?.promotional_price > 0}>
          <TSpan
            text={t("Texts.promotional_price")}
            value={`R$: ${(charge?.promotional_price ?? 0).toFixed(2)}`}
          />
        </When>
        <TSpan
          text={t("Texts.expired_days")}
          value={charge?.expired_days}
        />
      </InfoBoard>
    </div>
  );
}
