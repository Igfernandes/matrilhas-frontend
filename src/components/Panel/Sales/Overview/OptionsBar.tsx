import { SaleFilters } from "./SaleFilters";

export function OptionsBar() {

  return (
    <>
      <div className="relative flex justify-between flex-wrap md:flex-nowrap mb-4">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <SaleFilters />
        </div>

      </div>
    </>
  );
}
