import { FormProvider } from "react-hook-form";
import { SaleBoards } from "./boards";
import { StaticsHeader } from "./Header";
import { useStatics } from "./hooks/useStatics";
import { OptionsBar } from "./OptionsBar";
import { TimelineSales } from "./TimelineSales";

export function Statics() {
    const { isLoading, statics, formMethods, handleSubmit, onSubmit } = useStatics()

    return (
        <FormProvider {...formMethods} >
            <form onSubmit={handleSubmit(onSubmit)}>
                <OptionsBar />
                <StaticsHeader isLoading={isLoading} statics={statics} />
                <TimelineSales statics={statics} isLoading={isLoading} />
                <SaleBoards statics={statics} />
            </form>
        </FormProvider>
    )
}