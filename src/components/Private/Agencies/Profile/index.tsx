import { FormProvider } from "react-hook-form";
import { Information } from "./Information";
import { Sidebar } from "./sidebar";

import { ProfileManagerProps } from "./type";
import { useProfile } from "./hooks/useProfile";
import { Address } from "./Address";
import { SocialMedias } from "./SocialMedias";

type Props = Pick<ProfileManagerProps, "agency"> & {

}

export function AgencyProfile({ agency }: Props) {
    const { formMethods, handleSubmit, onSubmit, errors, isLoading} = useProfile({ agency })
    
    return (
        <FormProvider {...formMethods}>
            <form className=" w-full  shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap">
                    <div className="bg-white p-4 pt-10 md:pt-4 w-full md:w-[70%] md:pr-4 mb-4 md:mb-0">
                        <Information {...formMethods} agency={agency} errors={errors} />
                        <hr className="border-secondary my-4" />
                        <Address {...formMethods} agency={agency} errors={errors} />
                        <hr className="border-secondary my-4" />
                        <SocialMedias {...formMethods} agency={agency} errors={errors} />
                    </div>
                    <div className="bg-white p-4 w-full sticky md:h-[85vh] top-2 md:w-[28%] ml-auto">
                        <Sidebar {...formMethods} agency={agency} errors={errors} isLoading={isLoading} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}