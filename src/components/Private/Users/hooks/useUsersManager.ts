import { useMemo } from "react";
import useGetGroups from "../../../../services/Users/Groups/Get/useGetGroups";

export function useUsersManager() {
  const { rows: groupsData } = useGetGroups();
  const groups = useMemo(() => groupsData, [groupsData]);

  return {
    groups,
  };
}
