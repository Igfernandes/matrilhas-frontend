import { FormShape } from "@type/Forms"
import { useForms } from "./hooks/useForms";
import { FormProvider } from "react-hook-form";
import { When } from "@components/utilities/When";
import { Definitions } from "@components/Private/Forms/Profile/parts/Definitions";
import { FilledFormsTable } from "@components/Private/Forms/Profile/Fills/FilledFormsTable";
import { FormBuilderPreview } from "@components/shared/layouts/FormBuilder/Preview";
import { FormBuilder } from "@components/shared/layouts/FormBuilder";
import { FooterForms } from "./FooterForms";
import { Notice } from "@components/shared/others/Notice";
import i18n from "@configs/i18n";
import { useFillFieldsModal } from "./Fills/hooks/useFillFieldsModal";

type Props = {
    form?: FormShape;
    step: number;
}

export function FormsProfile({ form, step }: Props) {
    const { formMethods, components, handleChangeFormFields, isLoading, submit } = useForms({ form })
    const { handleDeleteFillField, isLoadingFillFieldDelete, modal, handleToggleModal } = useFillFieldsModal({ formId: form?.id ?? 0 });

    return (
        <>
            <FormProvider {...formMethods}>
                <form >
                    <div className="mt-6 p-6 bg-white">
                        <When value={step === 1}>
                            <Definitions slug={form?.slug} targetForm={form ?? {} as FormShape} handleChangeFormFields={handleChangeFormFields} />
                        </When>
                        <When value={step === 2}>
                            <FormBuilder
                                components={components}
                                onChangeForm={handleChangeFormFields}
                            />
                        </When>
                        <When value={step === 3}>
                            <FormBuilderPreview fields={components} />
                        </When>
                        <When value={step === 4}>
                            <FilledFormsTable components={components} formId={form?.id ?? 0} />
                        </When>
                    </div>
                    <FooterForms formId={form?.id} isLoading={isLoading} handleSubmit={formMethods.handleSubmit(submit)} />
                </form>
            </FormProvider>
            <Notice
                headerTitle={i18n("Words.attention")}
                title={i18n("Screens.dashboard.forms.fills.title_already_exclude")}
                text={i18n("Screens.dashboard.forms.fills.text_already_exclude")}
                onSubmit={handleDeleteFillField}
                isShowModal={modal.type === "EXCLUDE"}
                onModal={handleToggleModal}
                isLoading={isLoadingFillFieldDelete}
            />
        </>
    )
}