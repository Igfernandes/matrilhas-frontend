
import { ChargesFilters } from "./ChargesFilters";

export function OptionsBar() {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <ChargesFilters />
    </div>
  );
}
