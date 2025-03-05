import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
};

export function useFileModal({ name }: Props) {
  const { watch } = useFormContext();
  const [progress, setProgress] = useState(0);

  const file = watch(name)?.[0];

  useEffect(() => {
    if (!file) return;

    // Reseta o progresso quando um novo arquivo é selecionado
    setProgress(0);
    let interval = setInterval(() => "");

    const fakeUpload = new Promise((resolve) => {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            resolve(Promise);
            return 100;
          }
          return prev + 25; // Incrementa o progresso
        });
      }, 300);
    });

    fakeUpload.then(() => console.log("Upload concluído:", file.name));

    // Limpa o intervalo se o componente desmontar ou se um novo arquivo for selecionado
    return () => clearInterval(interval);
  }, [file]);

  return {
    progress,
  };
}
