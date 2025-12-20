import { useCallback, useRef } from "react";
import i18n from "@configs/i18n";
import { ModalUserOperationType, TDataInvite } from "../../type";
import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { useModalContext } from "@contexts/Modal";
import { InvitesShape } from "../../../../../types/Invites";
import dayjs from "dayjs";

export function useInvites() {
  const { handleToggleModal, modal } =
    useModalContext<ModalUserOperationType>();
  const tHeadsInvite = useRef<Array<string>>([
    "ID",
    i18n("Words.email"),
    i18n("Words.is_valid"),
    i18n("Words.expired_at"),
    i18n("Words.created_at"),
    i18n("Words.actions"),
  ]);

  const updateInviteForTable = useCallback((data: unknown): TDataInvite => {
    const { id, email, is_valid, expired_at, created_at } = data as InvitesShape;
    const expiredAtDate = dayjs(expired_at).format(
      i18n("Configs.format.datetime")
    );
    const createdAtDate = dayjs(created_at).format(
      i18n("Configs.format.datetime")
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
              text: i18n("Words.resend"),
              handle: () => handleToggleModal("RESEND_INVITE", id),
            },
            {
              text: i18n("Words.exclude"),
              handle: () => handleToggleModal("DELETE_INVITE", id),
            },
          ]}
        />
      ),
    };
  }, [handleToggleModal]);

  return {
    tHeadsInvite,
    modal,
    handleToggleModal, updateInviteForTable
  };
}
