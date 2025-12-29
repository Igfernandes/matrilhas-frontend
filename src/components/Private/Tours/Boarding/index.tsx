import i18n from "@configs/i18n";
import { useBoarding } from "./hooks/useBoarding";
import { TourShape } from "@type/Tours";
import { FormProvider } from "react-hook-form";
import { Button } from "@components/shared/layouts/Button";
import { Accordion } from "@components/shared/layouts/Accordion";
import { BoardingItem } from "./BoardingItem";
import { useI18n } from "@contexts/I18n";
import { Skeleton } from "@components/utilities/Skeleton";

type Props = {
    tour: TourShape;
}

export function TourBoarding({ tour }: Props) {
    const { t } = useI18n()
    const { formMethods, handleSubmit, onSubmit, isLoading, handleAddAddress, handleRemoveAddress, amount, isLoadingAddresses } = useBoarding({ tour })

    return (
        <FormProvider {...formMethods}>
            <form className="bg-white w-full px-4 py-1 shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="mt-5 mb-3">
                    <h2 className="text-3xl font-semibold text-primary">{t("Screens.dashboard.tours.address.boarding.title")}</h2>
                    <p className="text-sm">{t("Screens.dashboard.tours.address.boarding.description")}</p>
                </div>
                <div className="text-right mb-5  w-[13rem] ml-auto">
                    <Button text={t("Screens.dashboard.tours.address.add_button")} type="button" onClick={handleAddAddress} className="bg-primary cursor-pointer font-semibold text-white rounded-md" />
                </div>
                <div className="flex flex-wrap justify-between py-5 px-2 bg-secondary">
                    <Skeleton isLoading={isLoadingAddresses} settings={{
                        type: "board"
                    }}>
                        {Array.from({ length: amount }).map((_, index) => (
                            <div key={`boarding_${index}_address`} className="bg-white inline-block mx-auto my-1 px-4 rounded-md shadow-sm">
                                <Accordion >
                                    <BoardingItem id={index} onRemove={handleRemoveAddress} />
                                </Accordion>
                            </div>
                        ))}
                    </Skeleton>
                </div>

                <div className="w-full ml-auto my-6">
                    <Button className="bg-primary text-white font-semibold ml-auto w-full md:w-[30%]" isLoading={isLoading} text={i18n("Words.update")} />
                </div>
            </form>
        </FormProvider>
    )
}