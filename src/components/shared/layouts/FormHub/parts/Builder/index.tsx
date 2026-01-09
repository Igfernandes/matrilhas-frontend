import { DotsOptions } from "@components/shared/others/DotsOptions";
import { FormBuildProps } from "./type";
import { capitalize } from "@helpers/string";
import { FormBuilderViewed } from "./states/Viewed";
import { FormBuilderEditing } from "./states/Editing";
import { StoreFieldsModal } from "./Modals/StoreFields";
import useWindow from "@hooks/useWindow";
import { When } from "@components/utilities/When";
import { useModalContext } from "../../context/Modal";
import { useFieldsGroupsContext } from "../../context/FieldsGroups";
import { useI18n } from "@contexts/I18n";

export function Builder({
  fields = [],
  title = "",
  isEditing,
  createdAt,
}: FormBuildProps) {
  const { t } = useI18n()
  const { screenType } = useWindow();
  const { handleToggleModal, isShowModal } = useModalContext();
  const { handleFieldsGroupToEditing, fieldsGroupEditing, fieldsGroups } =
    useFieldsGroupsContext();

  return (
    <div className="mt-5 p-6 rounded-2xl bg-white">
      <div className="flex flex-wrap lg:flex-none justify-between mb-1 pb-4 ">
        <div className="flex justify-between items-center w-full lg:w-auto ">
          {/* <GripVertical className="cursor-pointer" /> */}
          <h2 className="text-2xl ml-1">
            <strong>
              {capitalize(t(`Words.${title?.toLowerCase()}`) || title)}
            </strong>
          </h2>
          <When value={screenType === "MOBILE" && fieldsGroupEditing != title}>
            <div>
              <DotsOptions
                actions={[
                  {
                    text: t("Words.edit"),
                    handle: () => handleFieldsGroupToEditing(title),
                  },
                ]}
              />
            </div>
          </When>
        </div>
        <div className="flex">
          <When value={!!createdAt}>
            <div className="mr-2">
              <span className="text-primary text-xs  md:text-sm">
                {`${t("Texts.updated_at")}: ${new Date(createdAt).toLocaleString()}`}
              </span>
            </div>
          </When>
          <When value={screenType === "DESKTOP" && fieldsGroupEditing != title}>
            <div>
              <DotsOptions
                actions={[
                  {
                    text: t("Words.edit") || "Edit",
                    handle: () => handleFieldsGroupToEditing(title),
                  },
                ]}
              />
            </div>
          </When>
        </div>
      </div>
      <FormBuilderViewed fields={fields} isEditing={isEditing} />
      <FormBuilderEditing
        fields={fields}
        isEditing={isEditing}
        handleEdit={handleFieldsGroupToEditing}
        onModal={handleToggleModal}
      />
      <StoreFieldsModal
        isShowModal={isShowModal}
        onModal={handleToggleModal}
        groups={fieldsGroups}
      />
    </div>
  );
}
