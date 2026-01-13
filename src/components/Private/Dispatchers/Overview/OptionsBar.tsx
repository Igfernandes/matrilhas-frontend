import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { useRouter } from "next/navigation";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { DispatchersFilters } from "./DispatchersFilters";

export function OptionsBar() {
  const route = useRouter();
  const { dispatcher } = privateRoutes;

  return (
    <div className="flex flex-wrap md:flex-none justify-between mb-6">
      <div className="w-full md:w-[45%] xl:w-[25%]">
        <DispatchersFilters />
      </div>
      <div className="w-full lg:w-[75%] flex justify-end">
        <div className="w-full md:w-auto mx-2 mt-2 md:mt-auto">
          <Button
            className="border border-zinc-300 px-3 font-bold rounded-xl bg-secondary text-primary"
            text={i18n("Texts.new_send")}
            type="button"
            onClick={() => route.push(`${dispatcher}/create`)}
          />
        </div>
      </div>
    </div>
  );
}
