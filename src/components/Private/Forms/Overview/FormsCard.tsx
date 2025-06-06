import i18n from "@configs/i18n";
import { Notice } from "@components/shared/others/Notice";
import { useModalContext } from "@contexts/Modal";
import { FormsCardProps, ModalFormsOperationType } from "../type";
import { Cards } from "@components/shared/layouts/Cards";
import { useFormsOverview } from "./hooks/useFormsOverview";
import { privateRoutes, publicRoutes } from "@configs/routes/Web/navigation";
import { AmountInscribes } from "./AmountInscribes";
import { useNavigator } from "@hooks/useNavigator";
import useWindow from "@hooks/useWindow";

export function FormsCard({ search, filterObjects }: FormsCardProps) {
  const { forms, handleToggleStatusForm, isLoadingDeleteForm } = useFormsOverview({
    filter: search,
    handleFilter: filterObjects,
  });
  const { forms: formsRoutePublic } = publicRoutes;
  const { handleCopy } = useNavigator();
  const { forms: formsRoute } = privateRoutes;
  const { handleToggleModal, modal } =
    useModalContext<ModalFormsOperationType>();
  const { baseUrl } = useWindow();

  return (
    <>
      <div>
        <Cards
          items={forms.map((form) => ({
            description: form.description,
            alert: form.name,
            link: `${formsRoute}/${form.id}`,
            createdAt: form.created_at,
            dotsActions: [
              {
                handle: () =>
                  handleCopy(`${baseUrl}${formsRoutePublic}/${form.slug}`),
                text: i18n(`words.link_copy`),
              },
              {
                handle: () => handleToggleModal("EXCLUDE", form.id),
                text: i18n(`words.exclude`),
              },
            ],
            foot: {
              items: [<AmountInscribes key={"amountInscribes"} />],
            },
          }))}
        />
      </div>
      <Notice
        headerTitle={i18n("words.attention")}
        title={i18n("custom_forms.modal.title_already_exclude")}
        text={i18n("custom_forms.modal.text_already_exclude")}
        onSubmit={handleToggleStatusForm}
        isShowModal={modal.type === "EXCLUDE"}
        onModal={handleToggleModal}
        isLoading={isLoadingDeleteForm}
      />
    </>
  );
}
