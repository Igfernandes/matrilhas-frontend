import { FeedDataShape } from "@components/shared/layouts/Feeds/type"
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { isEquals } from "@helpers/json";
import useGetClients from "@services/Clients/Get/useGet";
import useGetUsersInvite from "@services/Invites/Get/Users/useGet";
import { useEffect, useMemo, useRef, useState } from "react"

export function useGraphicClients() {
    const routesRef = useRef(privateRoutes);
    const { rows: clientsData } = useGetClients({
        email: '',
        limit: 500
    })
    const { rows: invitesData } = useGetUsersInvite({
        is_valid: true,
        limit: 500
    })
    const [fieldsPendents, setFieldsPendents] = useState<Array<FeedDataShape>>()

    useEffect(() => {
        const clientRows = clientsData.map((client) => ({
            scape: `${routesRef.current.clients}/${client.id}`,
            message: `${i18n("Words.not_fill_email")}:  ${client.name}`,
        }))
        const inviteRows = invitesData.map((invite) => ({
            message: `${i18n("Words.invite_pending")}: ${invite.email.slice(0, 14)}...`,
            scape: routesRef.current.usersManager,
        }))

        const fieldsPendentsNew = [...clientRows, ...inviteRows]

        if(isEquals(fieldsPendents, fieldsPendentsNew)) return;

        setFieldsPendents([...clientRows, ...inviteRows])
    }, [invitesData, clientsData, fieldsPendents])
    // Hook logic here
    return useMemo(() => ({
        fieldsPendents
    }), [fieldsPendents])
}