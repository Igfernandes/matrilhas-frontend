import { When } from "@components/utilities/When";
import { InputProps } from "./type";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { Upload } from "@assets/Icons/black/Upload";
import { textColors } from "@assets/colors/colors";
import { CircleRed } from "@assets/Icons/red/CircleRed";
import { FileModal } from "./Modal";
import { useFile } from "./hooks/useFile";

export const File = React.forwardRef<HTMLInputElement, InputProps>(
  function File(
    {
      dataTestId,
      className,
      id,
      label,
      errors,
      type = "file",
      name,
      required,
      handledChange,
      ...rest
    }: InputProps,
    ref
  ) {
    const IdCurrent = id ?? dataTestId;
    const {
      currentValue,
      isShowModal,
      setCurrentValue,
      setIsShowModal,
      setValue,
      watch,
    } = useFile();

    useEffect(() => {
      const value = watch(`${name}`);

      if (!value) return;

      setCurrentValue(value[0]);
    }, [watch(`${name}`), name]);

    return (
      <>
        <div className="relative ">
          <label
            className={`${
              !!errors ? "border-amber-500 outline-amber-500" : ""
            } ${className} block w-full px-3 pb-3 pt-5 h-14  bg-white  border-secondary  cursor-pointer border-2 rounded-lg text-primary text-sm disabled:bg-disable`}
            onClick={() => setIsShowModal(true)}
          >
            <span className="font-medium"> {currentValue?.name as string}</span>
            <span
              className={`absolute transition-all duration-350`}
              style={{
                left: !!currentValue ? ".75rem" : "1rem",
                top: !!currentValue ? ".10rem" : "1rem",
                fontSize: !!currentValue ? ".75rem" : "1rem",
              }}
            >
              {label}
              <When value={required}>
                <i className="text-red">*</i>
              </When>
            </span>
            <When value={!currentValue}>
              <Upload className="absolute right-4 top-4" />
            </When>
          </label>
          <When value={!!currentValue}>
            <CircleRed
              className="absolute right-4 top-4 cursor-pointer"
              fill={textColors.red}
              onClick={() => {
                setValue(`${name}`, "");
                setCurrentValue(undefined);
              }}
            />
          </When>
        </div>
        <FileModal
          isShowModal={isShowModal}
          handleModal={setIsShowModal}
          fileId={IdCurrent}
          name={`${name}`}
          input={
            <input
              {...rest}
              ref={ref}
              name={name}
              type={type}
              onChange={(ev: React.ChangeEvent<HTMLInputElement>) => {
                if (rest.onChange) rest.onChange(ev);
                if (handledChange) handledChange(ev);
              }}
              className={`${className} hidden`}
              data-testid={dataTestId}
              id={IdCurrent}
            />
          }
        />
        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
