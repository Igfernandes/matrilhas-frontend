import { CSRFShape } from "@services/Authentications/CSRF/types";
import { postRememberMe } from "../services/Authentications/RememberMe/SSR";
import { privateRoutes } from "@configs/routes/Web/navigation";

type Props = {
  referenceToken: string;
  csrf: CSRFShape;
};

export async function handleRememberMe({ referenceToken, csrf }: Props) {
  const resp = await postRememberMe({
    referenceToken,
  });

  if (!resp)
    return {
      props: {
        csrf,
      },
    };

  return {
    redirect: {
      destination: privateRoutes.dashboard,
      permanent: false,
    },
  };
}
