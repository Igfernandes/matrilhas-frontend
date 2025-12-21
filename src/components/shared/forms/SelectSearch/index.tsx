import { When } from "@components/utilities/When";
import { SelectProps } from "./type";
import React, { useEffect } from "react";
import ErrorMessage from "@components/shared/others/ErrorMessage";
import { useSelect } from "./hooks/useSelect";
import { ArrowDownSimple } from "@assets/Icons/black/ArrowDownSimple";
import { useFieldsAnimation } from "@hooks/Forms/useFieldsAnimation";

export const SelectSearch = React.forwardRef<HTMLInputElement, SelectProps>(
  function SelectSearch(
    {
      dataTestId,
      className = "",
      id,
      label,
      errors,
      name,
      required,
      options = [],
      ...rest
    }: SelectProps,
    ref
  ) {
    const { labelStyledState, changeLabelClass } = useFieldsAnimation();
    const {
      handleToggleList,
      isShowList,
      handleChangeValue,
      selected,
      search,
      handleSearch,
    } = useSelect({ name: name ?? "", options });
    const IdCurrent = id ?? dataTestId;

    useEffect(() => {
      changeLabelClass(!!selected ? "UP" : "DOWN");
    }, [selected, changeLabelClass]);

    return (
      <>
        <div
          className="relative"
          onMouseLeave={() => handleToggleList(false)}
        >
          <label htmlFor={IdCurrent} className="w-full">
            <span
              className="absolute cursor-pointer top-[2px] left-[2px] pl-2 rounded-lg bg-white transition-all duration-350"
              style={labelStyledState}
            >
              {label}
              <When value={required}>
                <span className="text-primary">*</span>
              </When>
            </span>

            <input
              {...rest}
              ref={ref}
              name={name}
              type="hidden"
              readOnly
            />

            <p
              onClick={() => handleToggleList(true)}
              className={`${className} ${errors ? "border-amber-500 outline-amber-500" : ""
                } h-[3.5rem] w-full px-3 pt-6 pb-2 cursor-pointer bg-white border-2 border-secondary rounded-xl`}
            >
              {selected}
              <ArrowDownSimple className="absolute right-4 top-6" />
            </p>

            {isShowList && (
              <div className="absolute bg-white w-full p-2 shadow-lg rounded-sm z-50">
                <div className="search-bar mb-2">
                  <input
                    data-testid={dataTestId}
                    id={IdCurrent}
                    type="search"
                    onChange={(ev) => handleSearch(ev.currentTarget.value)}
                    className="w-full px-3 py-1 border-2 border-secondary rounded-lg"
                  />
                </div>

                <ul className="h-[15vh] overflow-y-auto">
                  {options
                    .filter(
                      (option) =>
                        !search ||
                        option.text.toLowerCase().includes(search.toLowerCase())
                    )
                    .map(({ text, value }, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          handleChangeValue(name ?? "", { text, value });
                          handleToggleList(false);
                        }}
                        className="px-2 py-1 bg-secondary cursor-pointer hover:bg-primary hover:text-white rounded-sm"
                      >
                        {text}
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </label>
        </div>

        <ErrorMessage errors={errors?.message} />
      </>
    );
  }
);
