import { useUsers } from "./hooks/useUsers";
import { UsersStructProps } from "../type";
import { ModalFormUsers } from "../Modals/Users";
import { Notice } from "@components/shared/others/Notice";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import useDeleteUsers from "../../../../services/Users/Delete/useDelete";
import usePatchStatusUsers from "../../../../services/Users/Patch/Status/usePatch";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useI18n } from "@contexts/I18n";

export function Users({ search, groups }: UsersStructProps) {
  const { t } = useI18n()
  const { updateUserForTable, tHeadsUser, handleToggleModal, modal } = useUsers();
  const { mutateAsync: deleteUser } = useDeleteUsers();
  const { mutateAsync: patchStatusUsers } = usePatchStatusUsers();

  return (
    <>
      <div>
        <SmartTable
          ajax={{
            builder: updateUserForTable,
            key: "users",
            url: API_ROUTES.users
          }}
          options={{
            pagination: {
              max: 5,
            },
            filters: {
              name_contains: search
            }
          }}
          title={t("Words.users")}
          excludes={["cpf", "cnpj", "category", "created_at", "updated_at"]}
          tHeads={{
            data: tHeadsUser,
            widths: [60, 166.5, 166.5, 166.5, 120, 100, 70],
          }}
        />
      </div>
      <div>
        <ModalFormUsers
          groups={groups}
          title={t("Texts.update_user")}
          isShowModal={modal.type === "DEFAULT_USER"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.users.user.title_already_desative")}
          text={t("Screens.dashboard.users.user.text_already_desative")}
          onSubmit={() => {
            patchStatusUsers({
              id: modal.id as number,
            });
            handleToggleModal(false);
          }}
          isShowModal={modal.type === "DESATIVE_USER"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.users.user.title_already_active")}
          text={t("Screens.dashboard.users.user.text_already_active")}
          onSubmit={() => {
            patchStatusUsers({
              id: modal.id as number,
            });
            handleToggleModal(false);
          }}
          isShowModal={modal.type === "ACTIVE_USER"}
          onModal={handleToggleModal}
        />
        <Notice
          headerTitle={t("Words.attention")}
          title={t("Screens.dashboard.users.user.title_already_exclude")}
          text={t("Screens.dashboard.users.user.text_already_exclude")}
          onSubmit={() => {
            deleteUser({
              id: modal.id as number,
            });
            handleToggleModal(false);
          }}
          isShowModal={modal.type === "DELETE_USER"}
          onModal={handleToggleModal}
        />
      </div>
    </>
  );
}
