import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "@components/Public/Login/Form";
import { ExternalContainer } from "@components/shared/layouts/ExternalContainer";
import i18n from "@configs/i18n";
import { GetServerSideProps } from "next";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { handleRememberMe } from "../server/handleRememberMe";
import { getCSRF } from "@services/Authentications/CSRF/SSR";
import { LoginPageProps } from "@components/Public/Login/types";

export default function Home({ csrf }: LoginPageProps) {
  return (
    <ExternalContainer>
      <div className="row">
        <div className="column text-center">
          <div className="my-6">
            <UserShare className="mx-auto" />
          </div>
          <div className="mb-1">
            <h2 className="text-2xl">
              <strong>{i18n("Screens.login.title")}</strong>
            </h2>
          </div>
          <div className="mb-6">
            <p className="text-sm">{i18n("Screens.login.text")}</p>
          </div>
          <LoginForm csrf={csrf} />
        </div>
      </div>
    </ExternalContainer>
  );
}
export const getServerSideProps: GetServerSideProps<LoginPageProps> = async ({
  req,
}) => {
  const tokenNavigation = req.cookies["token_navigation"] ?? "";
  const csrf = await getCSRF();

  if (tokenNavigation)
    return {
      redirect: {
        destination: privateRoutes.dashboard,
        permanent: false,
      },
    };

  const referenceToken = req.cookies["remember_referenceToken"] ?? "";

  if (referenceToken) return handleRememberMe({ referenceToken, csrf });

  return {
    props: {
      csrf: csrf,
    },
  };
};
