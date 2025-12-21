import { useFormRules } from "@hooks/Forms/useFormRules";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useModalContext } from "@contexts/Modal";
import {
  GalleryProfilePayload,
  GalleryProfileSchema,
} from "@components/Private/Galleries/Profile/profileSchemas";
import usePostGallery from "@services/Galleries/Post/usePost";

dayjs.extend(customParseFormat);

export function useModalForm() {
  const { formMethods, handleSubmit } = useFormRules<GalleryProfilePayload>({
    schema: GalleryProfileSchema,
  });
  const { handleToggleModal } = useModalContext();
  const { mutateAsync: postCreateGallery, isPending } = usePostGallery();

  const submit = (payload: GalleryProfilePayload) => {
    postCreateGallery(payload).then(() => {
      handleToggleModal(false);
    });
  };

  return {
    formMethods,
    handleSubmit,
    submit,
    isLoading: isPending,
  };
}
