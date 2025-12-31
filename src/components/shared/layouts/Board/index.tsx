import { useI18n } from "@contexts/I18n";
import Link from "next/link";

type Props = {
    header: {
        title: string,
        background: string,
    }
    items: Array<{
        label: string;
        value: number;
        url?: string;
    }>
}

export function Board({ items, header }: Props) {
    const { t } = useI18n()

    return (
        <div className="bg-white my-3 w-[25vw] shadow-md rounded-md">
            <div className={`text-center font-semibold text-white p-2 border-b ${header.background}`}>
                <h3>{header.title}</h3>
            </div>
            <div className="p-2">
                <div className="bg-secondary p-1 overflow-y-auto h-[40vh]">
                    {items.map((item, index) => (
                        <div className=" bg-white  shadow-sm rounded-sm p-1 px-2 " key={item.label ?? index}>
                            <div>
                                <h4 className="text-sm line-clamp-1 bg-secondary">{item.label}</h4>
                            </div>
                            <div className="flex items-center justify-between mt-1">
                                <p className="text-sm inline-block font-semibold text-primary">{"Total: "}
                                    <span className="text-zinc-600">{item.value}</span>
                                </p>
                                <Link href={item.url ?? "#"} className="text-sm line-clamp-1 text-indigo underline">
                                    {t('Words.see')}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}