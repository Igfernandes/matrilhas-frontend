import { Options } from "@components/shared/layouts/Tables/utilities/Options"
import { When } from "@components/utilities/When"
import useWindow from "@hooks/useWindow"
import { ActionsBarProps } from "./type"
import i18n from "@configs/i18n"
import { useSelectorContext } from "@components/shared/layouts/Tables/contexts/selectors"
import { useActionsBar } from "./hooks/useActionsBar"
import { useMemo } from "react"

export function ActionsBar({ actions, }: ActionsBarProps) {
    const { screenType } = useWindow()
    const { handleUncheckAll } = useActionsBar()
    const { selectors } = useSelectorContext()
    const selectorsSelected = useMemo(() => selectors.filter(s => s.isChecked).length, [selectors])

    return (
        <>
            <div style={{
                bottom: selectorsSelected > 0 ? '0%' : '-100%',
            }} className="fixed w-[79%] left-[19.5%] bottom-[0%] transition-all px-2 py-4 bg-white shadow-md border-t-2 border-zinc-300  ml-1">
                <When value={screenType === "DESKTOP"}>
                    <div className="flex justify-between">
                        <div className="ml-2">
                            <span><strong className="text-primary">{selectorsSelected}</strong> {i18n('Words.selected')}s</span>
                            <When value={selectorsSelected > 0}> |
                                <span onClick={() => handleUncheckAll()} className="text-active cursor-pointer hover:font-semibold ml-2">{i18n('Words.uncheck')}</span>
                            </When>
                        </div>
                        <div className="flex justify-end gap-2">
                            {actions?.map((action, index) => (
                                <div key={index} className={`${index !== 0 ? "border-l-2 border-zinc-400" : ""} pl-2`}>
                                    <div className="cursor-pointer text-primary font-bold" onClick={action.handle}>
                                        {action.text}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </When>
                <When value={screenType === "MOBILE"}>
                    <Options actions={actions ?? []} />
                </When>
            </div>
        </>
    )
}