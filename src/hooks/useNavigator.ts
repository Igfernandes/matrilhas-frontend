import { useState } from "react";
import { useSnackbar } from "./useSnackbar";
import { useI18n } from "@contexts/I18n";

export function useNavigator() {
  const { t } = useI18n();
  const [isCopied, setIsCopied] = useState(false);
  const { dispatchSnackbar } = useSnackbar();

  const handleCopy = async (link: string) => {
    try {
      const textarea = document.createElement("textarea");
      textarea.value = link;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";

      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      setIsCopied(true);
      document.execCommand("copy");
      dispatchSnackbar({
        type: "notice",
        title: `${t("Texts.link_copied")}`,
        message: t("Texts.copied_success"),
      });
      setTimeout(() => setIsCopied(false), 2000); // Feedback por 2 segundos
    } catch (err) {
      console.error("Erro ao copiar:", err);
    }
  };

  return {
    isCopied,
    handleCopy,
  };
}
