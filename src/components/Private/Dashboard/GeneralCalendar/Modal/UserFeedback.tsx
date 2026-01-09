import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { UserShape } from "@type/Users";
import Link from "next/link";

type Props = {
  users?: Array<UserShape>;
  date: string;
};

export function UserFeedback({ users, date }: Props) {
  const { usersManager } = privateRoutes;
  const { t } = useI18n()

  return (
    <>
      {users
        ?.filter((user) => user.birthdate === date)
        .map((user) => (
          <li key={user.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${usersManager}`}>
              <span>{`${t("Texts.birthday_of")} ${user.name}`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
