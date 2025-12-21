import i18n from "@configs/i18n";
import { Button } from "@components/shared/layouts/Button";
import { AccessControl } from "@components/shared/settings/AccessControl";
import { PERMISSIONS } from "@constants/permissions";
import { GalleriesFilters } from "./GalleriesFilters";
import { useModalContext } from "@contexts/Modal";

export function OptionsBar() {
  const { handleToggleModal } = useModalContext()

  return (
    <>
      <div className="relative flex justify-between flex-wrap md:flex-nowrap mb-6">
        <div className="w-full md:w-[45%] xl:w-[25%]">
          <GalleriesFilters />
        </div>
        <div className="mt-5 md:mt-0 w-full flex-wrap lg:flex-none md:w-[75%] flex justify-around md:justify-end">
          <div className="w-full md:w-auto mx-0 md:mx-2 mb-3 lg:my-0">
            <AccessControl targetPermissions={[PERMISSIONS.galleries.create]}>
              <Button
                className="border border-zinc-300 px-3 font-bold rounded-xl bg-white text-primary"
                text={i18n("Words.register")}
                type="button"
                onClick={() => handleToggleModal("CREATE")}
              />
            </AccessControl>
          </div>
        </div>
      </div>
    </>
  );
}
