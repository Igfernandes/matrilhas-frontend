import i18n from "@configs/i18n";
import Link from "next/link";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ChargesFilters } from "./ChargesFilters";

export function OptionsBar() {
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <ChargesFilters />
      <div className=" mt-7 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
        <div className="w-full lg:w-auto mx-0 lg:mx-2">
          <Link
            href={privateRoutes.financesCreate}
            className="inline-block border border-zinc-300 px-3 py-3 font-bold rounded-xl"
            type="button"
          >
            {i18n("Words.generate_charge")}
          </Link>
        </div>
      </div>
    </div>
  );
}
