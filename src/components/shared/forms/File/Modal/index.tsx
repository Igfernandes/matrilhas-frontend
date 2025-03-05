import { Modal } from "@components/shared/layouts/Modal";
import { ModalProps } from "@components/shared/layouts/Modal/type";
import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { UploadPreview } from "./UploadPreview";
import { UploadPrompt } from "./UploadPrompt";
import { When } from "@components/utilities/When";
import { useFormContext } from "react-hook-form";
import { useFileModal } from "./hook/useFileModal";

type Props = Omit<ModalProps, "children" | "title"> & {
  input: React.ReactNode;
  fileId: string;
  name: string;
};

export function FileModal({
  handleModal,
  isShowModal,
  input,
  fileId,
  name,
}: Props) {
  const { watch, setValue } = useFormContext();
  const fileValue = watch(`${name}`);
  const { progress } = useFileModal({ name });

  return (
    <Modal title={"Upload"} isShowModal={isShowModal} handleModal={handleModal}>
      <div>
        <When value={!!fileValue}>
          <UploadPreview
            name={name}
            file={fileValue ? fileValue[0] : null}
            setValue={setValue}
            progress={progress}
          />
        </When>
        <When value={!fileValue}>
          <UploadPrompt fileId={fileId} />
        </When>
        <div className="flex justify-between mt-4">
          <div>
            <p className="text-[.63rem]">
              {i18n(`words.allowed_formats_image`)}
            </p>
          </div>
          <div>
            <p className="text-[.63rem]">{i18n(`words.allowed_size_image`)}</p>
          </div>
        </div>
        <div>{input}</div>
      </div>
      <div className="flex justify-between border-t-2 border-secondary mt-6 pt-4">
        <div className="w-[47%]">
          <Button
            type="button"
            className="border-secondary border-2 font-semibold"
            text={i18n(`words.cancel`)}
            onClick={() => handleModal(false)}
          />
        </div>
        <div className="w-[47%]">
          <Button
            type="button"
            text={i18n(`words.save`)}
            className="bg-red  text-white font-semibold disabled:bg-disable"
            disabled={progress == 100 ? false : true}
            onClick={() => handleModal(false)}
          />
        </div>
      </div>
    </Modal>
  );
}
