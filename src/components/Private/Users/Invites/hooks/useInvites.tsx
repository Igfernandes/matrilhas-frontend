import { useCallback, useMemo } from "react";
import i18n from "@configs/i18n";
import { ModalUserOperationType, TDataInvite } from "../../type";
import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { useModalContext } from "@contexts/Modal";
import { InvitesShape } from "../../../../../types/Invites";
import dayjs from "dayjs";
import { useI18n } from "@contexts/I18n";

export function useInvites() {
  const { t } = useI18n();
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();
  const tHeadsInvite = useMemo<Array<string>>(() => [
    "ID",
    t("Words.email"),
    t("Texts.is_valid"),
    t("Words.expired_at"),
    t("Words.created_at"),
    t("Words.actions"),
  ], [t]);

  const updateInviteForTable = useCallback((data: unknown): TDataInvite => {
    const { id, email, is_valid, expired_at, created_at } = data as InvitesShape;
    const expiredAtDate = dayjs(expired_at).format(
      t("Configs.format.datetime")
    );
    const createdAtDate = dayjs(created_at).format(
      t("Configs.format.datetime")
    );

    return {
      id,
      email,
      is_valid: is_valid ? i18n("Words.yes") : i18n("Words.not"),
      expired_at: expiredAtDate != "Invalid Date" ? expiredAtDate : created_at,
      created_at: createdAtDate != "Invalid Date" ? createdAtDate : created_at,
      actions: (
        <ButtonConfig
          actions={[
            {
              text: t("Words.resend"),
              handle: () => handleToggleModal("RESEND_INVITE", id),
            },
            {
              text: t("Words.exclude"),
              handle: () => handleToggleModal("DELETE_INVITE", id),
            },
          ]}
        />
      ),
    };
  }, [handleToggleModal, t]);

  return {
    tHeadsInvite,
    modal,
    handleToggleModal, updateInviteForTable
  };
}
