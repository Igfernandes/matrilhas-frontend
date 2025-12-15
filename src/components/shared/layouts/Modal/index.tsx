import { Close } from "@assets/Icons/black/CloseClean";
import { ModalProps } from "./type";
import { When } from "@components/utilities/When";
import { textColors } from "@assets/colors/colors";

export function Modal({ children, title, isShowModal, handleModal }: ModalProps) {
  return (
    <When value={isShowModal}>
      <div className="modal fixed top-0 left-0 Z-[99999] w-full px-4 md:px-0 h-full bg-[#00000059] flex justify-center items-center">
        <div className={`bg-white sm:max-w-[60%] max-h-[98vh] overflow-x-hidden overflow-y-auto  rounded-xl`}>
          <div className={`bg-primary  flex items-center border-b-2 border-b-secondary p-4 `}>
            <div className="pr-4">
              <h4 className={`txt-sm md:text-xl text-white`}>
                <strong>{title}</strong>
              </h4>
            </div>
            <div
              className="ml-auto bg-tertiary rounded-lg p-1 cursor-pointer"
              onClick={() => handleModal(false)}
            >
              <Close fill={textColors.white} />
            </div>
          </div>
          <div className="py-5 px-6">{children}</div>
        </div>
      </div>
    </When>
  );
}
