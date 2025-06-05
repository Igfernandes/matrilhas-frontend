import { When } from "@components/utilities/When";
import { FieldShape } from "../type";
import { getRenderer } from "../utils/render";

export function Field({ element, group, ...rest }: FieldShape) {
  const Component = getRenderer(element);
  const className = "canvas-field";

  return (
    <div className={`${className} my-4`}>
      <div className="rounded-md flex">
        <Component
          type={element}
          name={`input_${rest.id}`}
          {...rest}
          defaultValue={
            ["button"].includes(element)
              ? rest.label ?? rest.defaultValue
              : rest.defaultValue
          }
        />
        <When
          value={
            ["simple", "user"].includes(group ?? "") &&
            ["radio", "checkbox"].includes(element)
          }
        >
          <label className="ml-2" htmlFor={rest.id}>
            {rest.label}
          </label>
        </When>
      </div>
    </div>
  );
}
