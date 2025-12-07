import i18n from "@configs/i18n";
import { ClientShape } from "@type/Clients";
import { UserShape } from "@type/Users";
import moment from "moment";
import { useCallback, useEffect, useState } from "react";
import { CalendarEventShape } from "../type";
import useGetUsers from "@services/Users/Get/useGetUsers";
import useGetClients from "@services/Clients/Get/useGet";
import { isEquals } from "@helpers/json";

type Props = {
  refData: string;
};

export function useBirthday({ refData }: Props) {
  const { rows: users, isPending: isLoadingUsers } = useGetUsers({
    birthdate: refData,
  });
  const { rows: clients, isPending: isLoadingClients } = useGetClients({
    birthdate: refData,
  });
  const [birthdayPeople, setBirthdayPeople] = useState<CalendarEventShape[]>(
    []
  );

  const builderData = useCallback((data: Array<UserShape | ClientShape>) => {
    return data
      .filter((clientOrUser) => clientOrUser.birthdate)
      .map((clientOrUser) => {
        const birth = moment(clientOrUser.birthdate);
        const thisYear = moment().year();
        const date = birth.year(thisYear);

        return {
          title: i18n("Words.see_list") + " 🎂",
          start: date.toDate(),
          end: date.toDate(),
          allDay: true,
          resource: clientOrUser.birthdate ?? "",
        };
      });
  }, []);

  useEffect(() => {
    const birthdateUsers = Array.isArray(users) ? builderData(users) : [];
    const birthdateClients = Array.isArray(clients) ? builderData(clients) : [];
    const birthdatePeopleNew = [...birthdateUsers, ...birthdateClients];

    if (isEquals(birthdayPeople, birthdatePeopleNew)) return;

    setBirthdayPeople(birthdatePeopleNew);
  }, [users, clients, builderData]);

  return {
    birthdayPeople,
    users,
    clients,
    isLoadingBirthday: isLoadingUsers || isLoadingClients,
  };
}
