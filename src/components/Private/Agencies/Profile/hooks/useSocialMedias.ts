import { AgencySocialMediaShape } from "@type/Agencies/SocialMedia";
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  socialMedias: Array<AgencySocialMediaShape>;
};

export function useSocialMedias({ socialMedias }: Props) {
  const { getValues, setValue } = useFormContext();
  const [lines, setLines] = useState<number>(socialMedias?.length || 1);

  const handleRemoveSocialMedia = useCallback(
    (index: number) => {
      const socialMedias = getValues("social_media") || [];
      socialMedias.splice(index, 1);
      setValue("social_media", socialMedias);
      setLines((lines) => Math.max(1, lines - 1));
    },
    [getValues, setValue]
  );

  return { handleRemoveSocialMedia, lines, setLines };
}
