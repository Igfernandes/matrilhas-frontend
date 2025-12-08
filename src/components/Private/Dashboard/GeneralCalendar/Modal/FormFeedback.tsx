import i18n from "@configs/i18n";
import { privateRoutes } from "@configs/routes/Web/navigation";
import { FormShape } from "@type/Forms";
import Link from "next/link";

type Props = {
  forms?: Array<FormShape>;
  date: string;
};

export function FormFeedback({ forms, date }: Props) {
  const { forms: formsRoute } = privateRoutes;
  return (
    <>
      {forms
        ?.filter((form) => form.started_at === date)
        .map((form) => (
          <li key={form.id} className="bg-white px-2 rounded-md mb-2">
            <Link href={`${formsRoute}/${form.id}`}>
              <span>{`${i18n("Words.event")}: ${form.name
                }`}</span>
            </Link>
          </li>
        ))}
    </>
  );
}
