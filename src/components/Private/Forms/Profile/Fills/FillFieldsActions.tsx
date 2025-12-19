import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { Shared } from "@components/shared/others/Shared";
import { useModalContext } from "@contexts/Modal";

type Props = {
  formId: number;
  refPackage: string;
  fieldId: number;
};

export function FillFieldsActions({
  formId,
  refPackage,
  fieldId,
}: Props) {
  const router = useRouter();
  const { forms } = privateRoutes;
  const { handleToggleModal } = useModalContext()

  return (
    <div className="flex">
      <Shared entity={"FORMS_FILLS"} in_ids={[fieldId]} />
      <DotsOptions actions={[
        {
          text: i18n("Words.edit") as string,
          handle: () => {
            router.push(`${forms}/${formId}/fill/${refPackage}`);
          },
        },
        {
          text: i18n("Words.exclude") as string,
          handle: () => handleToggleModal("EXCLUDE", refPackage),
        }
      ]} />
    </div>
  );
}
