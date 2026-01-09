import { UserShare } from "@assets/Icons/colorful/UserShare";
import { LoginForm } from "./Form";
import { CSRFShape } from "@services/Authentications/CSRF/types";
import { useEffect, useState } from "react";
import { useI18n } from "@contexts/I18n";

type Props = {
  csrf: CSRFShape;
};

export function LoginContent({ csrf }: Props) {
  const { t } = useI18n()
  const [texts, setTexts] = useState<Record<string, string>>({
    title: "Screens.login.title",
    text: "Screens.login.text",
  });

  useEffect(() => {
    setTexts({
      title: "Screens.login.title",
      text: "Screens.login.text",
    });
  }, []);

  return (
    <>
      <div className="my-3 md:my-6">
        <UserShare className="mx-auto" />
      </div>
      <div className="mb-1">
        <h2 className="text-2xl text-primary">
          <strong>{t(texts?.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{t(texts?.text)}</p>
      </div>
      <LoginForm csrf={csrf} />
    </>
  );
}
