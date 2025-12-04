import { LockCog } from "@assets/Icons/colorful/LockCog";
import i18n from "@configs/i18n";
import { AlterPasswordForm } from "./Form";
import { useRef } from "react";

export function AlterPasswordContent() {
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
          <strong>{i18n(texts.current.title)}</strong>
        </h2>
      </div>
      <div className="mb-6">
        <p className="text-sm">{i18n(texts.current.text)}</p>
      </div>
      <AlterPasswordForm />
    </>
  );
}
