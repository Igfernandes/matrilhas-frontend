import { useInvites } from "./hooks/useInvites";
import { InvitesStructProps, ModalUserOperationType } from "../type";
import { Notice } from "@components/shared/others/Notice";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { useModalContext } from "@contexts/Modal";
import useInviteUserResend from "../../../../services/Invites/Resend/Users/useInvite";
import useDeleteInviteUser from "../../../../services/Invites/Delete/Users/useDelete";
import { API_ROUTES } from "@configs/routes/Api/api";
import { useI18n } from "@contexts/I18n";

export function Invites({ search }: InvitesStructProps) {
  const { t } = useI18n();
  const { tHeadsInvite, updateInviteForTable } = useInvites();
  const { modal, handleToggleModal } =
    useModalContext<ModalUserOperationType>();
  const { mutateAsync: inviteUserResend, isPending: isPendingResend } =
    useInviteUserResend();
  const { mutateAsync: deleteInviteUser, isPending: isPendingDelete } =
    useDeleteInviteUser();

  return (
    <>
      <div className="mt-6">
        <SmartTable
          ajax={{
            builder: updateInviteForTable,
            key: "INVITES_USERS",
            url: API_ROUTES.inviteUser,
          }}
          options={{
            pagination: {
              max: 5,
            },
            filters: {
              name: search
            }
          }}
          title={t("Words.invites")}
          tHeads={{
            data: tHeadsInvite,
            widths: [60, 250, 80, 166.5, 166.5, 48],
          }}
        />
      </div>
      <Notice
        headerTitle={t("Words.attention")}
        title={t("Screens.dashboard.users.invites.title_already_resend")}
        text={t("Screens.dashboard.users.invites.text_already_resend")}
        onSubmit={() =>
          inviteUserResend({
            id: modal.id as number,
          }).then(() => handleToggleModal(false))
        }
        isShowModal={modal.type === "RESEND_INVITE"}
        onModal={handleToggleModal}
        isLoading={isPendingResend}
      />
      <Notice
        headerTitle={t("Words.attention")}
        title={t("Screens.dashboard.users.invites.title_already_exclude")}
        text={t("Screens.dashboard.users.invites.text_already_exclude")}
        onSubmit={() =>
          deleteInviteUser({
            id: modal.id as number,
          }).then(() => handleToggleModal(false))
        }
        isShowModal={modal.type === "DELETE_INVITE"}
        onModal={handleToggleModal}
        isLoading={isPendingDelete}
      />
    </>
  );
}
