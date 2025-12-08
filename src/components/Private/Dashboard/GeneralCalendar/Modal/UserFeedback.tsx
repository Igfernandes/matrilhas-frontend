import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { UserShape } from "@type/Users";
import Link from "next/link";

type Props = {
  users?: Array<UserShape>;
  date: string;
};

export function UserFeedback({ users, date }: Props) {
  const { usersManager } = privateRoutes;
  return (
    <>
      {users
        ?.filter((user) => user.birthdate === date)
        .map((user) => (
          <li key={user.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${usersManager}`}>
              <span>{`${i18n("Words.birthday_of")} ${user.name}`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
