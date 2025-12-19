import { Button } from "@components/shared/layouts/Button";
import i18n from "@configs/i18n";

type Props = {
  isLoading: boolean;
  formId?: number;
  handleSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
};

export function FooterForms({
  isLoading,
  handleSubmit,
  formId
}: Props) {

  return (
    <div className="bg-white flex flex-wrap md:flex-auto items-center justify-end px-6 rounded-xl py-4 mt-6">

      <div className="flex w-full md:w-auto mt-4 md:mt-auto">
        <div className="flex justify-end  mx-2">
          <div className="mx-2">
            <Button
              type={"submit"}
              className="bg-primary font-semibold py-2 px-6 md:px-10 text-white"
              text={i18n(`Words.${formId ? 'update' : 'create'}`)}
              onClick={handleSubmit}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
