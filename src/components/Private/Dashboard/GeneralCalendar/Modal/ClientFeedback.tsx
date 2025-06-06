import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { ClientShape } from "@type/Clients/client";
import Link from "next/link";

type Props = {
  clients?: Array<ClientShape>;
  date: string;
};

export function ClientFeedback({ clients, date }: Props) {
  const { clients: clientsRoute } = privateRoutes;
  return (
    <>
      {clients
        ?.filter((client) => client.birthdate === date)
        .map((client) => (
          <li key={client.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${clientsRoute}/${client.id}`}>
              <span>{`${i18n("words.birthday_of")} ${client.name}`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
