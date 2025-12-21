import { publicRoutes } from "@configs/routes/Web/navigation";
import { Icons } from "@constants/icons";
import { useI18n } from "@contexts/I18n";
import { AgencyShape } from "@type/Agencies";
import { AgencySocialMediaPlatforms } from "@type/Agencies/SocialMedia";
import Image from "next/image";
import Link from "next/link";

type Props = {
    agency: Omit<AgencyShape, "id" | "status" | "password" | "updated_at">;
}

export function CardAgency({ agency }: Props) {
    const { t } = useI18n();

    return (
        <div className="card-agency shadow-md border-2 border-zinc-200 rounded-lg p-4 bg-white h-full ">
            <div className="p-2">
                <Image className="w-full h-40 object-contain" src={agency.logotype ?? "/imgs/illustration.png"} alt={agency.name} width={400} height={400} />
            </div>
            <div>
                <span className="block bg-primary text-white font-semibold rounded-sm text-center py-1">{agency.name}</span>
            </div>
            <div className="mt-2">
                <ul className="flex justify-around py-2">
                    {agency.social_media?.map((social, key) => (
                        <li key={`social_${key}`}>
                            <Link href={social.link} target="_blank" rel="noopener noreferrer"
                                className=" bg-primary p-[.6rem] rounded-full inline-block underline">
                                {Icons[social.platform as AgencySocialMediaPlatforms] as React.ReactNode}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <Link href={`${publicRoutes.agencies}/${agency.cnpj}`}
                    className="inline-block w-full text-center font-semibold hover:bg-primary hover:text-white  text-primary rounded-md py-2 cursor-pointer px-6">
                    <span>{t("Screens.home.agencies.view_details")}</span>
                </Link>
            </div>
        </div>
    )
}