import { RecoverPasswordForm } from "./Form";
import { EmailForward } from "@assets/Icons/colorful/EmailForward";
import { SquareRoundedChevronLeft } from "@assets/Icons/black/SquareRoundedChevronLeft";
import Link from "next/link";
import { publicRoutes } from "@configs/routes/Web/navigation";
import { useRef } from "react";
import { useI18n } from "@contexts/I18n";

export function ForgotPasswordContent() {
  const { t } = useI18n()
  const { login } = publicRoutes;
  const texts = useRef<Record<string, string>>({
    title: "Screens.forgot_password.title",
    text: "Screens.forgot_password.text",
    back_page: "Texts.back_page",
  });

  return (
    <>
      <div className="mb-5 sm:mt-2">
        <EmailForward className="mx-auto" />
      </div>
      <div className="mb-1">
        <h2 className="text-2xl">
          <strong>{t(texts.current.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{t(texts.current.text)}</p>
      </div>
      <RecoverPasswordForm />
      <div className="sm:px-8 mt-4">
        <Link
          className="border-2 px-3 h-[48px] text-sm sm:text-md rounded-xl flex items-center justify-center"
          href={login}
        >
          <SquareRoundedChevronLeft className="mr-2" />
          <strong>{t(texts.current.back_page)}</strong>
        </Link>
      </div>
    </>
  );
}
