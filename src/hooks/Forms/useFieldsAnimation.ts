import { isEquals } from "@helpers/json";
import { CSSProperties, FormEvent, useCallback, useRef, useState } from "react";

type StatusLabelStyled = "UP" | "DOWN";

export function useFieldsAnimation() {
  const labelStyled = useRef({
    UP: {
      left: "1rem",
      top: ".5rem",
      fontSize: ".75rem",
    },
    DOWN: {
      left: ".75rem",
      top: ".95rem",
      fontSize: "1rem",
    },
  });
  const [labelStyledState, setLabelStateClass] = useState<CSSProperties>({
    left: ".75rem",
    top: ".95rem",
    fontSize: "1rem",
  });
  const [isLabelUp, setIsLabelUp] = useState<boolean>(false);

  /**
   * @function changeLabelClass
   * - A função irá trocar as classes para criar a animação do label subir e descer no input.
   *
   * @param {"UP"|"DOWN"} state O estado que defini a posição do label.
   */
  const changeLabelClass = useCallback(
    (state: StatusLabelStyled) => {
      if (
        labelStyled.current[state] &&
        isEquals(labelStyledState, labelStyled.current[state])
      )
        return;

      setLabelStateClass(labelStyled.current[state]);
      setIsLabelUp(state === "UP");
    },
    [labelStyledState]
  );

  /**
   * @function handleTransitionLabel
   * - Algumas regras que definem o comportamento de quando o label deve subir ou não.
   *
   * @param {FormEvent<HTMLInputElement>} ev A propriedade é baseada no valor de retorno de um evento de elemento
   * html input
   *
   * @returns {void}
   */
  const handleTransitionLabel = useCallback(
    (ev: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const input = ev.currentTarget;
      const currentValue = input.value;

      if (input.placeholder || currentValue || ev.type === "focus")
        return changeLabelClass("UP");

      changeLabelClass("DOWN");
    },
    [changeLabelClass]
  );

  return {
    labelStyledState,
    handleTransitionLabel,
    changeLabelClass,
    isLabelUp,
  };
}
