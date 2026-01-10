import { LockCog } from "@assets/Icons/colorful/LockCog";
import { AlterPasswordForm } from "./Form";
import { useRef } from "react";
import { useI18n } from "@contexts/I18n";

export function AlterPasswordContent() {
  const { t } = useI18n()
  const texts = useRef<Record<string, string>>({
    title: "Screens.alter_password.title",
    text: "Screens.alter_password.text",
  });

  return (
    <>
      <div className="mb-4">
        <LockCog className="mx-auto" />
      </div>
      <div className="mb-1">
        <h2 className="text-2xl">
          <strong>{t(texts.current.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{  t(texts.current.text)}</p>
      </div>
      <AlterPasswordForm />
    </>
  );
}
