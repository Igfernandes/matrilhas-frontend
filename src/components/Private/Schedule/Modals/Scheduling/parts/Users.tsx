import { SchedulePayload } from "../schemas";
import { useFormContext } from "react-hook-form";
import { GroupChecks } from "@components/shared/forms/GroupChecks";
import { UserShape } from "@type/Users";
import { useI18n } from "@contexts/I18n";

type Props = {
    users: Array<UserShape>;
}

export function Users({ users }: Props) {
    const { t } = useI18n()
    const { formState: { errors } } = useFormContext<SchedulePayload>()

    return (
        <>
            <div className="form-title mb-4">
                <h4 className="text-lg">
                    <strong>{t("Texts.list_linked_users")}</strong>
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