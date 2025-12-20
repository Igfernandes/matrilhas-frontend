import { useModalContext } from "@contexts/Modal";
import { ModalUserOperationType } from "../type";
import { useUsersGroup } from "./hooks/useUsersGroup";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { API_ROUTES } from "@configs/routes/Api/api";
import i18n from "@configs/i18n";
import { ModalFormUsersGroup } from "./modals/UsersGroup";
import { Notice } from "@components/shared/others/Notice";

type Props = {
    search: string;
}

export function Groups({ search }: Props) {
    const { updateUserGroupForTable, tHeadUsersGroup, deleteUsersGroup, patchUsersGroup } = useUsersGroup();
    const { handleToggleModal, modal } =
        useModalContext<ModalUserOperationType>();

    return (
        <>
            <div className="mb-6 relative">
                <SmartTable
                    ajax={{
                        builder: updateUserGroupForTable,
                        key: "users_groups",
                        url: API_ROUTES.groups
                    }}
                    options={{
                        pagination: {
                            max: 5,
                        },
                        filters: {
                            name_contains: search
                        }
                    }}
                    title={i18n("Words.groups")}
                    excludes={["updated_at"]}
                    tHeads={{
                        data: tHeadUsersGroup,
                        widths: [60, 166.5, 166.5, 166.5, 166.5, 48],
                    }}
                />
            </div>
            <div className="relative z-10">
                <ModalFormUsersGroup
                    isShowModal={modal.type === "DEFAULT_GROUP"}
                    onModal={handleToggleModal}
                />
                <Notice
                    headerTitle={i18n("Words.attention")}
                    title={i18n("Screens.dashboard.users.group.title_already_desative")}
                    text={i18n("Screens.dashboard.users.group.text_already_desative")}
                    onSubmit={() =>
                        patchUsersGroup({
                            id: modal.id as number,
                        }).then(() => handleToggleModal(false))
                    }
                    isShowModal={modal.type === "DESATIVE_GROUP"}
                    onModal={handleToggleModal}
                />
                <Notice
                    headerTitle={i18n("Words.attention")}
                    title={i18n("Screens.dashboard.users.group.title_already_active")}
                    text={i18n("Screens.dashboard.users.group.text_already_active")}
                    onSubmit={() =>
                        patchUsersGroup({
                            id: modal.id as number,
                        }).then(() => handleToggleModal(false))
                    }
                    isShowModal={modal.type === "ACTIVE_GROUP"}
                    onModal={handleToggleModal}
                />
                <Notice
                    headerTitle={i18n("Words.attention")}
                    title={i18n("Screens.dashboard.users.group.title_already_exclude")}
                    text={i18n("Screens.dashboard.users.group.text_already_exclude")}
                    onSubmit={() =>
                        deleteUsersGroup({
                            id: modal.id as number,
                        }).then(() => handleToggleModal(false))
                    }
                    isShowModal={modal.type === "DELETE_GROUP"}
                    onModal={handleToggleModal}
                />
            </div>
        </>
    )
}