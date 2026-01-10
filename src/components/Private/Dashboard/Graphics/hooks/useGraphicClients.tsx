import { FeedDataShape } from "@components/shared/layouts/Feeds/type"
import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { isEquals } from "@helpers/json";
import useGetClients from "@services/Clients/Get/useGet";
import useGetUsersInvite from "@services/Invites/Get/Users/useGet";
import { useEffect, useMemo, useRef, useState } from "react"

export function useGraphicClients() {
    const routesRef = useRef(privateRoutes);
    const { rows: clientsData, isPending: isLoadingClient } = useGetClients({
        email: '',
        limit: 500
    })
    const { rows: invitesData, isPending: isLoadingInvites } = useGetUsersInvite({
        is_valid: true,
        limit: 500
    })
    const [fieldsPendents, setFieldsPendents] = useState<Array<FeedDataShape>>()

    useEffect(() => {
        const clientRows = clientsData.map((client) => ({
            title: client.name,
            scape: `${routesRef.current.clients}/${client.id}`,
            message: `${i18n("Texts.not_fill_email")}`,
            date: client.created_at,
        }))
        const inviteRows = invitesData.map((invite) => ({
            title: invite.email,
            message: `${i18n("Texts.invite_pending")}`,
            scape: routesRef.current.usersManager,
            date: invite.created_at,
        }))

        const fieldsPendentsNew = [...clientRows, ...inviteRows]

        if (isEquals(fieldsPendents, fieldsPendentsNew)) return;

        setFieldsPendents([...clientRows, ...inviteRows])
    }, [invitesData, clientsData, fieldsPendents])
    // Hook logic here
    return useMemo(() => ({
        fieldsPendents,
        isLoading: isLoadingClient || isLoadingInvites
    }), [fieldsPendents, isLoadingClient, isLoadingInvites])
}