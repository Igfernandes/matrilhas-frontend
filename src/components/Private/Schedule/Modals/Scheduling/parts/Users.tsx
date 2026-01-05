import i18n from "@configs/i18n";
import { SchedulePayload } from "../schemas";
import { useFormContext } from "react-hook-form";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { UserShape } from "@type/Users";

type Props = {
    users: Array<UserShape>;
}

export function Users({ users }: Props) {
    const { formState: { errors } } = useFormContext<SchedulePayload>()

    return (
        <>
            <div className="form-title mb-4">
                <h4 className="text-lg">
                    <strong>{i18n("Words.list_linked_users")}</strong>
                </h4>
                <span className="text-xs inline-block">{errors.linked && <i className="text-red">{errors.linked.message}</i>}</span>
            </div>
            <div className="form-group">
                <GroupChecks
                    name="linked"
                    data={users.map((user) => ({
                        label: user.name,
                        value: String(user.id),
                    }))}
                />

            </div>
        </>
    )
}