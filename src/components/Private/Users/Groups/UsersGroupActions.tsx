import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { ModalUserOperationType } from "../type";
import i18n from "@configs/i18n";
import { UsersGroupShape } from "@type/Users/UsersGroup";
import { useModalContext } from "@contexts/Modal";

type Props = {
    userGroup: UsersGroupShape;
}

export function UsersGroupActions({ userGroup }: Props) {
    const { handleToggleModal } = useModalContext<ModalUserOperationType>();

    return (
        <ButtonConfig
            actions={[
                {
                    text: i18n("Words.edit"),
                    handle: () => handleToggleModal("DEFAULT_GROUP", userGroup.id),
                },
                {
                    text: i18n(
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
                    text: i18n("Words.exclude"),
                    handle: () => handleToggleModal("DELETE_GROUP", userGroup.id),
                },
            ]}
        />
    )
}