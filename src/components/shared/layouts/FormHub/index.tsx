import FieldProvider from "./context/Fields";
import FieldsGroupsProvider from "./context/FieldsGroups";
import ModalProvider from "./context/Modal";
import TabsProvider from "./context/Tabs";
import { FieldsTabs } from "./parts/FieldsTabs";
import { Form } from "./parts/Form";
import { OptionsBar } from "./parts/OptionsBar";
import { FormBuildProps } from "./type";

export function FormHub({
  fields,
  entity,
  groups,
  handleShared,
  entityType,
  handleSubmitFields,
  handleUpdateClient,
}: FormBuildProps) {
  return (
    <TabsProvider>
      <ModalProvider>
        <FieldsGroupsProvider groups={groups}>
          <FieldProvider
            entity={entity}
            entityType={entityType}
            fieldsRelation={fields}
            handleSubmitFields={handleSubmitFields}
          >
            <OptionsBar
              handleShared={handleShared}
              handleUpdateClient={handleUpdateClient}
            />
            <FieldsTabs />
            <Form />
          </FieldProvider>
        </FieldsGroupsProvider>
      </ModalProvider>
    </TabsProvider>
  );
}
