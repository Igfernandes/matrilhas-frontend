import { Gallery } from "../../fields/Gallery";
import { List } from "../../fields/List";
import { FieldShape } from "../../type";

export const classNameDefault = "h-7 py-1 px-2 ";

export const fieldsCustom = {
  gallery: ({ className, required, ...props }: FieldShape) => (
    <Gallery
      required={required ?? ""}
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
  list: ({ className, required, ...props }: FieldShape) => (
    <List
      required={required ?? ""}
      className={`${classNameDefault} w-full ${className}`}
      {...props}
    />
  ),
};
