import i18n from "@configs/i18n";
import { useTabs } from "./hooks/useTabs";
import { useRef } from "react";
import { TourTabProps } from "./type";

export function ToursTabs({ tabs }: TourTabProps) {
    const { handleChangeTab, tab } = useTabs()
    const tabStyled = useRef<string>("text-md md:text-sm xl:text-md px-2 border-primary border border-b-0 rounded-sm cursor-pointer hover:bg-emerald-600 hover:text-white px-2 py-1");

    return (
        <>
            <div>
                <ul className="flex flex-wrap">
                    <li className={`${tabStyled.current} ${tab === "INFORMATION" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("INFORMATION")}>
                        <a href="#information" className="tab-link">{i18n("Words.information")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "ADDRESSES" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("ADDRESSES")}>
                        <a href="#itineraries" className="tab-link">{i18n("Words.address")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "PERIODS" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("PERIODS")}>
                        <a href="#periods" className="tab-link">{i18n("Words.periods")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "RULES" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("RULES")}>
                        <a href="#rules" className="tab-link">{i18n("Words.rules")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "GALLERY" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("GALLERY")}>
                        <a href="#galleries" className="tab-link">{i18n("Words.gallery")}</a>
                    </li>
                    <li className={`${tabStyled.current} ${tab === "AGENCIES" ? "bg-primary text-white" : "text-primary bg-white"}`} onClick={() => handleChangeTab("AGENCIES")}>
                        <a href="#agencies" className="tab-link">{i18n("Words.agencies")}</a>
                    </li>
                </ul>
            </div>
            <div>
                {tabs[tab]}
            </div>
        </>
    )
}