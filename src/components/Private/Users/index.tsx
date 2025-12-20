import { UsersGroupShape } from "../../../types/Users/UsersGroup";
import { Invites } from "./Invites";
import { Users } from "./Users";

type Props = {
  groups: Array<UsersGroupShape>;
  search: string;
};

export function UsersManager({ search, groups }: Props) {

  return (
    <div>
      <Users groups={groups} search={search} />
      <Invites search={search} />
    </div>
  );
}
