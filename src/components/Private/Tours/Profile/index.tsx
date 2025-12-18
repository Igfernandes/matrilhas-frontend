import { FormProvider } from "react-hook-form";
import { Information } from "./Information";
import { Sidebar } from "./sidebar";

import { useProfile } from "./hooks/useProfile";
import { ProfileManagerProps } from "../type";

type Props = Pick<ProfileManagerProps, "tour">

export function TourProfile({ tour }: Props) {
    const { formMethods, handleSubmit, onSubmit, errors, isLoading } = useProfile({ tour })
    return (
        <FormProvider {...formMethods}>
            <form className=" w-full  shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap">
                    <div className="bg-white px-3 py-4 md:p-4 w-full md:w-[70%]  md:pr-4 mb-4 md:mb-0">
                        <Information {...formMethods} tour={tour} errors={errors} />
                    </div>
                    <div className="bg-white px-3 py-4 md:p-4 w-full md:sticky lg:h-[100vh] xl:h-[87vh] top-2 md:w-[28%] ml-auto">
                        <Sidebar {...formMethods} tour={tour} errors={errors} isLoading={isLoading} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}