import { LockSquareRoundedFilled } from "@assets/Icons/black/LockSquareRoundedFilled";
import { Flags } from "@components/shared/layouts/Flags";
import { useI18n } from "@contexts/I18n";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const { t } = useI18n();

  return (
    <>
      <header>
        <div className=" px-6 py-4 border-b-2 border-zinc-200">
          <div className="content flex justify-between items-center max-w-[1100px] mx-auto">
            <div className="flex items-center">
              <div className="mr-4">
                <Link href={"/"}>
                  <Image
                    src={"/imgs/matrilhas-500x500.png"}
                    width={53}
                    height={56}
                    alt="logotipo AGM"
                  />
                </Link>
              </div>
              <div>
                <ul className="flex">
                  <li className="mx-2">
                    <Link className="font-bold text-primary hover:text-emerald-500" href={"/#about_us"}>
                      <span>{t("Words.about_us")}</span>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link className="font-bold text-primary hover:text-emerald-500" href={"/#agencies"}>
                      <span>{t("Words.agencies")}</span>
                    </Link>
                  </li>
                  <li className="mx-2">
                    <Link className="font-bold text-primary hover:text-emerald-500" href={"/tours"}>
                      <span>{t("Words.tours")}</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <div className="flex items-center bg-secondary p-2 rounded-lg">
                <LockSquareRoundedFilled className="mr-2" />
                <span className="text-xs">
                  <strong>Site protegido</strong>
                </span>
              </div>
              <Flags />

            </div>
          </div>
        </div>
      </header>
    </>
  );
}
