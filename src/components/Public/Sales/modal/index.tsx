import { FormProvider } from "react-hook-form";
import { Personal } from "./Personal";
import { useSales } from "../hooks/useSales";
import { Footer } from "./footer";
import { When } from "@components/utilities/When";
import { useSalesContext } from "../context";
import { Address } from "./Address";
import { Dependents } from "./Dependents";
import { Resume } from "./Resume";
import { Contact } from "./Contact";
import { Emergency } from "./Emergency";
import { References } from "./References";

export function Sale() {
    const { step } = useSalesContext()
    const { formMethods, onSubmit, handleSubmit, isLoadingSubmit } = useSales();

    return (
        <div className="modal fixed top-0 left-0 Z-[99999] w-full px-4 md:px-0 h-full bg-[#00000059] flex justify-center items-center">
            <div className={`bg-white sm:max-w-[60%] w-full md:w-[35vw] max-h-[98vh] overflow-x-hidden overflow-y-auto  rounded-xl`}>
                <div className="px-5 min-h-[10rem] p-4">
                    <FormProvider {...formMethods}>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <When value={step === "PERSONAL"}>
                                <Personal />
                            </When>
                            <When value={step === "CONTACT"}>
                                <Contact />
                            </When>
                            <When value={step === "EMERGENCY"}>
                                <Emergency />
                            </When>
                            <When value={step === "ADDRESS"}>
                                <Address />
                            </When>
                            <When value={step === "REFERENCES"}>
                                <References />
                            </When>
                            <When value={step === "DEPENDENTS"}>
                                <Dependents />
                            </When>
                            <When value={step === "RESUME"}>
                                <Resume isLoadingSubmit={isLoadingSubmit} />
                            </When>
                            <Footer />
                        </form>
                    </FormProvider>
                </div>
            </div>
        </div>
    )
}