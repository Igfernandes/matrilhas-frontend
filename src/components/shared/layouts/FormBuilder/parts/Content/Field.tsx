import { FieldShape } from "../../type";
import { getRenderer } from "../../utils/render";

export function Field({ element, ...rest }: FieldShape) {
  const Component = getRenderer(element);
  const className = "canvas-field";

  return (
    <div className={className}>
      <Component
        type={element}
        {...rest}
        defaultValue={
          ["button"].includes(element)
            ? rest.label ?? rest.defaultValue
            : rest.defaultValue
        }
      />
    </div>
  );
}
