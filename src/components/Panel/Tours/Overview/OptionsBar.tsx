import { ToursFilters } from "./ToursFilters";

export function OptionsBar() {

  return (
    <>
      <div className="relative flex justify-between flex-wrap md:flex-nowrap mb-6">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <ToursFilters />
        </div>
      </div>
    </>
  );
}
