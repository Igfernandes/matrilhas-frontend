import { Datetime } from "@components/shared/forms/DateTime";
import { Input } from "@components/shared/forms/Input";
import { Select } from "@components/shared/forms/Select";
import { Filters } from "@components/shared/layouts/Filters";
import { useFiltersContext } from "@components/shared/layouts/Filters/contexts";
import { useI18n } from "@contexts/I18n";
import { FieldError } from "react-hook-form";

export function GalleriesFilters() {
    const { register, methods } = useFiltersContext()
    const { errors } = methods.formState;
    const { t } = useI18n()

    return (
        <Filters id="GALLERIES" >
            <div className="mb-1">
                <p><i>{t("Screens.dashboard.galleries.text_about_filters")}</i></p>
            </div>
            <div className="flex flex-wrap justify-between my-4 ">
                <div className="w-full my-2">
                    <Input {...register("title_contains")} maxLength={200} dataTestId="filter-title" label={t("Words.title")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.galleries.text_filter_partial_title")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Datetime {...register("created_at")} dataTestId="filter-created_at" label={t("Words.created_at")} />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.galleries.text_filter_created_at")}</span>
                </div>
                <div className="w-full md:w-[48%] my-2">
                    <Select
                        {...register("status")}
                        label={t("Words.status")}
                        id="status"
                        dataTestId="status"
                        options={[
                            {
                                text: t("Texts.select_status"),
                                value: "",
                            },
                            {
                                text: t("Words.published"),
                                value: "PUBLISHED",
                            },
                            {
                                text: t("Words.draft"),
                                value: "DRAFT",
                            },
                        ]}
                        errors={errors.status as FieldError}
                    />
                    <span className="text-xs text-disabled ml-1">{t("Screens.dashboard.galleries.text_filter_status")}</span>
                </div>
            </div>
        </Filters>
    )
}