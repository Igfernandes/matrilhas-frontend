import { FormType } from "../../type";
import { useI18n } from "@contexts/I18n";

type Props = {
    setFormStatus: (status: FormType) => void;
    formStatus: FormType;
}

export function FormTabs({ formStatus, setFormStatus }: Props) {
    const { t } = useI18n()

    return (
        <div className="tabs">
            <ul className="flex">
                {["OPENED", "TERMINATED", "RELEASES"].map((status, key) => (
                    <li
                        key={key}
                        onClick={() => setFormStatus(status as FormType)}
                        className={` px-10 py-3 shadow-sm border-r-2 border-t-2 border-l-2 border-stone-400 rounded-md rounded-b-none mr-2 cursor-pointer ${formStatus == status ? "bg-primary text-white" : "bg-white"}`}>
                        <span>
                            <strong>{t(`Words.${status.toLowerCase()}`)}</strong>
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}