import i18n from "@configs/i18n";
import { useModalContext } from "@contexts/Modal";
import { ModalAgencyOperationType } from "../type";
import { Button } from "@components/shared/layouts/Button";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { PERMISSIONS } from "@constants/permissions";
import { AgencyFilters } from "./AgencyFilters";
import { useRouter } from "next/navigation"; 
import { privateRoutes } from "@configs/routes/Web/navigation";

export function OptionsBar() {
  const router = useRouter();
  const { agencies } = privateRoutes;
  const { handleToggleModal } = useModalContext<ModalAgencyOperationType>();

  return (
    <>
      <div className="relative flex justify-between flex-wrap md:flex-nowrap mb-6">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <AgencyFilters />
        </div>
        <div className="mt-5 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
          <div className="w-full md:w-auto mx-0 md:mx-2 mb-3 lg:my-0">
            <AccessControl targetPermissions={[PERMISSIONS.agencies.create]}>
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl bg-white text-primary"
                text={i18n("Words.register")}
                type="button"
                onClick={() => router.push(`${agencies}/create`)}
              />
            </AccessControl>
          </div>

          <div className="w-full md:w-auto mx-0 lg:mx-2 mt-3 lg:mt-0">
            <AccessControl targetPermissions={[PERMISSIONS.agencies.create]}>
              <Button
                className="bg-white border border-zinc-300 px-3 font-bold rounded-xl text-primary"
                text={i18n("Texts.import_agencies")}
                type="button"
                onClick={() => handleToggleModal("IMPORT")}
              ></Button>
            </AccessControl>
          </div>
        </div>
      </div>
    </>
  );
}
