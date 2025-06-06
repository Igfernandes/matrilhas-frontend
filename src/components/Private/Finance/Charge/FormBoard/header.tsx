import { Select } from "@components/shared/forms/Select";
import i18n from "@configs/i18n";
import { PRIVACY, STATUS } from "@constants/options";
import { ChargeShape } from "@type/Charges";
import dayjs from "dayjs";
import { UseFormSetValue } from "react-hook-form";
import { ChargeUpdatePayload } from "../schemas";

type Props = {
  setValue: UseFormSetValue<ChargeUpdatePayload>;
  charge: ChargeShape;
};

export function FormBoardHeader({ charge, setValue }: Props) {
  return (
    <div className="header mb-4">
      <div className="content flex justify-between">
        <div className="title mb-4">
          <h1 className="font-bold text-xl">{i18n(`words.definitions`)}</h1>
        </div>
        <div className="dates flex">
          <div className="created_at text-center text-xs mr-2">
            <div>
              <span className="font-semibold">{i18n("words.created")}</span>
            </div>
            <div>
              <span>{dayjs(charge.created_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
          <div className="updated_at text-center text-xs ">
            <div className="border-l-2 border-l-slate-300 pl-2">
              <span className="font-semibold">
                {i18n("words.last_updated")}
              </span>
            </div>
            <div>
              <span>{dayjs(charge.updated_at).format("DD/MM/YYYY")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="box flex justify-between my-4">
        <div className="status w-[20%]">
          <Select
            label={i18n("words.status")}
            dataTestId="status"
            options={STATUS.map((status) => ({
              text: i18n(`words.${status.toLowerCase()}`),
              value: status,
            }))}
            defaultValue={charge.status}
            onChange={(ev) =>
              setValue(
                "status",
                ev.currentTarget.value as "ACTIVE" | "INACTIVE"
              )
            }
          />
        </div>
        <div className="status w-[20%]">
          <Select
            label={i18n("words.privacy")}
            dataTestId="privacy"
            options={PRIVACY.map((privacy) => ({
              text: i18n(`words.${privacy.toLowerCase()}`),
              value: privacy,
            }))}
            defaultValue={charge.privacy}
            onChange={(ev) =>
              setValue(
                "privacy",
                ev.currentTarget.value as "PUBLIC" | "PRIVATE"
              )
            }
          />
        </div>
        <div className="type w-[20%]">
          <Select
            label={i18n("words.type")}
            dataTestId="type"
            options={["APPELLANT", "PUNCTUAL"].map((type) => ({
              text: i18n(`words.${type.toLowerCase()}`),
              value: type,
            }))}
            defaultValue={charge.type}
            onChange={(ev) =>
              setValue(
                "type",
                ev.currentTarget.value as "APPELLANT" | "PUNCTUAL"
              )
            }
          />
        </div>
      </div>
    </div>
  );
}
