import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import { useI18n } from "@contexts/I18n";
import { useModalContext } from "@contexts/Modal";

type Props = {
    id: number;
    status: "ACTIVE" | "INACTIVE";
}

export function UsersActions({ id, status }: Props) {
    const { t } = useI18n()
    const { handleToggleModal, } = useModalContext()
    return (
        <ButtonConfig
            actions={[
                {
                    text: t("Words.edit"),
                    handle: () => handleToggleModal("DEFAULT_USER", id),
                },
                {
                    text: t(`Words.${status.toLocaleLowerCase()}`),
                    handle: () =>
                        handleToggleModal(
                            status == "ACTIVE" ? "DESATIVE_USER" : "ACTIVE_USER",
                            id
                        ),
                },
                {
                    text: t("Words.exclude"),
                    handle: () => handleToggleModal("DELETE_USER", id),
                },
            ]}
        />
    )
}