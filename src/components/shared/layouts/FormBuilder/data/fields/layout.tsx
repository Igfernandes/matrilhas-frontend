import { FieldShape } from "../../type";

export const classNameDefault = "w-full min-h-7 py-1";

export const fieldsLayout = {
  paragraph: ({ className, defaultValue, ...props }: FieldShape) => (
    <p className={`${classNameDefault} ${className}`} {...props}>
      {defaultValue}
    </p>
  ),
  title: ({ className, defaultValue, ...props }: FieldShape) => (
    <h1 className={`${classNameDefault} ${className}`} {...props}>
      {defaultValue}
    </h1>
  ),
  span: ({ className, defaultValue, ...props }: FieldShape) => (
    <span className={`${classNameDefault} ${className}`} {...props}>
      {defaultValue}
    </span>
  ),
  hr: ({ className, ...props }: FieldShape) => (
    <hr className={`${classNameDefault} ${className}`} {...props} />
  ),
};
