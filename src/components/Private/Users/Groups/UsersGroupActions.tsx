import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { ModalUserOperationType } from "../type";
import { UsersGroupShape } from "@type/Users/UsersGroup";
import { useModalContext } from "@contexts/Modal";
import { useI18n } from "@contexts/I18n";

type Props = {
    userGroup: UsersGroupShape;
}

export function UsersGroupActions({ userGroup }: Props) {
    const { handleToggleModal } = useModalContext<ModalUserOperationType>();
    const { t } = useI18n()

    return (
        <ButtonConfig
            actions={[
                {
                    text: t("Words.edit"),
                    handle: () => handleToggleModal("DEFAULT_GROUP", userGroup.id),
                },
                {
                    text: t(
                        `Words.${userGroup.status == "ACTIVE" ? "desative" : "ative"}`
                    ),
                    handle: () =>
                        handleToggleModal(
                            userGroup.status == "ACTIVE"
                                ? "DESATIVE_GROUP"
                                : "ACTIVE_GROUP",
                            userGroup.id
                        ),
                },
                {
                    text: t("Words.exclude"),
                    handle: () => handleToggleModal("DELETE_GROUP", userGroup.id),
                },
            ]}
        />
    )
}