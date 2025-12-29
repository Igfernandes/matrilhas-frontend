import { textColors } from "@assets/colors/colors";
import { Trash } from "@assets/Icons/black/Trash";
import { useCallback } from "react";
import { useFormContext } from "react-hook-form"

type DependentsData = {
    name: string;
    cpf: string;
    birthdate: string;
}

export function Preview() {
    const { watch, setValue } = useFormContext()
    const dependents = watch("dependents");
    const handleRemoveDependent = useCallback((index: number) => {
        const updatedDependents = (dependents ?? []).filter((_: DependentsData, i: number) => i !== index);
        setValue("dependents", updatedDependents);

    }, [dependents, setValue]);

    return (
        <div>
            <ul className="h-[30vh] py-2 overflow-y-auto my-4">
                {(dependents ?? []).map((dependent: DependentsData, index: number) => (
                    <li key={`dependents_${index}`} className="flex justify-between items-center py-2 border-b last:border-0">
                        <p className="text-sm">
                            <span className="bg-secondary mx-1">{dependent.name}</span> |
                            <span className="bg-secondary mx-1">{dependent.cpf}</span> |
                            <span className="bg-secondary mx-1">{dependent.birthdate}</span>

                        </p>
                        <Trash onClick={() => handleRemoveDependent(index)} className="inline-block ml-auto cursor-pointer" fill={textColors.red} width={16} height={16} />
                    </li>
                ))}
            </ul>
        </div>
    )
}