import { FileSymlink } from "@assets/Icons/black/FileSymlink";
import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { ModalUsersOperationType } from "./type";
import { useRouter } from "next/router";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  handleToggleModal: (
    type: ModalUsersOperationType,
    id?: string | number
  ) => void;
  id: number;
};

export function UserActions({ handleToggleModal, id }: Props) {
  const router = useRouter();
  const { usersManager } = privateRoutes;

  return (
    <div className="flex">
      <FileSymlink />
      <DotsOptions
        actions={[
          {
            text: i18n("words.edit"),
            handle: () => router.push(`${usersManager}/${id}`),
          },
          {
            text: i18n("words.exclude"),
            handle: () => handleToggleModal("DELETE", id),
          },
        ]}
      />
    </div>
  );
}
