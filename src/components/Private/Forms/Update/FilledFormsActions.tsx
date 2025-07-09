import { Shared } from "@components/shared/others/Shared";

type Props = {
  formId: number;
};

export function FilledFormsActions({ formId }: Props) {
  return (
    <div className="flex">
      <div className="relative">
        <Shared entity={"FORMS"} in_ids={[formId ?? 0]} />
      </div>
    </div>
  );
}
