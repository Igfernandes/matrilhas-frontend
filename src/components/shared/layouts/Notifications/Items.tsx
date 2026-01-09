import i18n from "@configs/i18n";
import { NotificationShape } from "@type/Notifications/Notifications";
import dayjs from "dayjs";
import Link from "next/link";
import { ROUTES } from "./constants/routes";
import { When } from "@components/utilities/When";

type Props = {
  props: NotificationShape;
};
export function NotificationItem({
  props: { action, scope, message, key, author },
}: Props) {
  return (
    <div className="bg-secondary shadow-md p-4 rounded-xl my-4">
      <div className="flex justify-between">
        <div>
          <h4 className="text-sm text-primary font-semibold">
            {i18n(`Notifications.title_${scope}_${action.toLowerCase()}`)}
          </h4>
        </div>
        <When value={!!author && !!author.name}>
          <div className="text-xs">
            <span><strong>{i18n("Words.author")}</strong>:  {author?.name}</span>
          </div>
        </When>
      </div>
      <div className="mt-1">
        <div>
          <p className="text-dark text-sm">
            {message ??
              i18n(`Notifications.text_${scope}_${action.toLowerCase()}`)}
          </p>

          <div className="flex items-center justify-between mt-2">
            <div >
              <span className="text-primary text-sm mt-4">
                {dayjs().format("DD/MM/YYYY - HH:mm")}
              </span>
            </div>
            <When value={!!key && !!ROUTES[scope]}>
              <Link href={`${ROUTES[scope]}/${key}`}>
                <span className="text-white bg-primary py-1 px-2 rounded-md text-sm cursor-pointer">
                  {i18n("Texts.see_more")}
                </span>
              </Link>
            </When>
          </div>
        </div>
      </div>
    </div>
  );
}
