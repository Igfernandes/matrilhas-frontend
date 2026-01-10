import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { ModalFormsOperationType } from "../type";
import { Cards } from "@components/shared/layouts/Cards";
import { useFormsOverview } from "./hooks/useFormsOverview";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { AmountInscribes } from "./parts/AmountInscribes";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";
import dayjs from "dayjs";
import { useUserNavigationContext } from "@contexts/UserNavigation";
import { FormTabs } from "./parts/Tabs";
import { useFormsTab } from "./hooks/useFormsTab";
import { useI18n } from "@contexts/I18n";

export function FormsCard() {
  const { t } = useI18n()
  const { formStatus, setFormStatus, handleFilterForms } = useFormsTab()
  const { forms, handleToggleStatusForm, isLoadingDeleteForm } =
    useFormsOverview();
  const { forms: formsRoutePublic } = publicRoutes;
  const { forms: formsRoute } = privateRoutes;
  const { handleCopy } = useNavigator();
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { baseUrl } = useWindow();
  const { hasPermission } = useUserNavigationContext();

  return (
    <>
      <div  >
        <FormTabs formStatus={formStatus} setFormStatus={setFormStatus} />
        <Cards
          items={forms
            .filter((form) => handleFilterForms(formStatus, form))
            .map((form) => ({
              description: form.name ?? "",
              alert: form.description ?? "",
              link: `${formsRoute}/${form.id}`,
              color: form.color_mark,
              createdAt: dayjs(form.created_at).format("DD/MM/YYYY HH:mm"),
              dotsActions: [
                {
                  handle: () =>
                    handleCopy(`${baseUrl}${formsRoutePublic}/${form.slug}`),
                  text: t("Texts.link_copy") as string,
                },
                {
                  handle: () => handleToggleModal("EXCLUDE", form.id),
                  text: t("Words.exclude") as string,
                  permissions: ["forms_delete"],
                },
              ].filter(
                (dotAction) =>
                  !dotAction.permissions ||
                  hasPermission(dotAction.permissions)
              ),
              foot: {
                items: [<AmountInscribes key={"amountInscribes"} />],
              },
            }))}
        />
      </div>
      <Notice
        headerTitle={t("Words.attention")}
        title={t("Screens.dashboard.forms.title_already_exclude")}
        text={t("Screens.dashboard.forms.text_already_exclude")}
        onSubmit={handleToggleStatusForm}
        isShowModal={modal.type === "EXCLUDE"}
        onModal={handleToggleModal}
        isLoading={isLoadingDeleteForm}
      />
    </>
  );
}
