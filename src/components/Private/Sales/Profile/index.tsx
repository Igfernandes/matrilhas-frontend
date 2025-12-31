import { FormProvider } from "react-hook-form";
import { Information } from "./Information";
import { Sidebar } from "./sidebar";

import { useProfile } from "./hooks/useProfile";
import { Address } from "./Address";
import { Definitions } from "./Definitions";
import { Contact } from "./Contact";
import { Dependents } from "./Dependents";


export function SaleProfile() {
    const { formMethods, handleSubmit, onSubmit, errors, isLoading } = useProfile()

    return (
        <FormProvider {...formMethods}>
            <form className=" w-full  shadow-sm" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap">
                    <div className="bg-white p-4 pt-10 md:pt-4 w-full md:w-[70%] md:pr-4 mb-4 md:mb-0">
                        <Definitions />
                        <hr className="border-secondary my-4" />
                        <Information {...formMethods} errors={errors} />
                        <hr className="border-secondary my-4" />
                        <Address {...formMethods} errors={errors} />
                        <hr className="border-secondary my-4" />
                        <Contact {...formMethods} errors={errors} />
                        <hr className="border-secondary my-4" />
                        <Dependents />
                    </div>
                    <div className="bg-white p-4 w-full sticky md:h-[85vh] top-2 md:w-[28%] ml-auto">
                        <Sidebar {...formMethods} errors={errors} isLoading={isLoading} />
                    </div>
                </div>
            </form>
        </FormProvider>
    )
}