import { useState } from "react";

export function useToursGallery() {
  const [isOpenLightbox, setIsOpenLightbox] = useState<boolean>(false);

  return {
    isOpenLightbox,
    setIsOpenLightbox,
  };
}
