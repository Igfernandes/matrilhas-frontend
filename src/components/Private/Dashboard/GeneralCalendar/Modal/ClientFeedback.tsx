import { privateRoutes } from "@configs/routes/Web/navigation";
import { useI18n } from "@contexts/I18n";
import { ClientShape } from "@type/Clients";
import Link from "next/link";

type Props = {
  clients?: Array<ClientShape>;
  date: string;
};

export function ClientFeedback({ clients, date }: Props) {
  const { clients: clientsRoute } = privateRoutes;
  const { t } = useI18n()
  return (
    <>
      {clients
        ?.filter((client) => client.birthdate === date)
        .map((client) => (
          <li key={client.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${clientsRoute}/${client.id}`}>
              <span>{`${t("Texts.birthday_of")} ${client.name}`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
