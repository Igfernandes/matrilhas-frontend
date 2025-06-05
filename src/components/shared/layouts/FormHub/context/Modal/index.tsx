import React, { createContext, useContext, useMemo, useState } from "react";
import { ModalContextData, ModalProviderProps } from "./types";
const ModalContext = createContext<ModalContextData>({} as ModalContextData);

function ModalProvider({ children }: ModalProviderProps) {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const handleToggleModal = (isShowModal: boolean) => {
    setIsShowModal(isShowModal);
  };
  const props = useMemo(
    () => ({
      isShowModal,
      handleToggleModal,
    }),
    [isShowModal]
  );

  return (
    <ModalContext.Provider value={props}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;

export function useModalContext() {
  return useContext(ModalContext) as ModalContextData;
}
