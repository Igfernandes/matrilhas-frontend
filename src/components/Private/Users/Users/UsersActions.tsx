import { ButtonConfig } from "@components/shared/others/ButtonConfig";
import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";

type Props = {
    id: number;
    status: "ACTIVE" | "INACTIVE";
}

export function UsersActions({ id, status }: Props) {
    const { handleToggleModal, } = useModalContext()
    return (
        <ButtonConfig
            actions={[
                {
                    text: i18n("Words.edit"),
                    handle: () => handleToggleModal("DEFAULT_USER", id),
                },
                {
                    text: i18n(`Words.${status.toLocaleLowerCase()}`),
                    handle: () =>
                        handleToggleModal(
                            status == "ACTIVE" ? "DESATIVE_USER" : "ACTIVE_USER",
                            id
                        ),
                },
                {
                    text: i18n("Words.exclude"),
                    handle: () => handleToggleModal("DELETE_USER", id),
                },
            ]}
        />
    )
}