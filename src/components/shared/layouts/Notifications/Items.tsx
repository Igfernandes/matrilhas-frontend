import i18n from "@configs/i18n";
import { NotificationShape } from "@type/Notifications/Notifications";
import dayjs from "dayjs";

export function NotificationItem({
  action,
  scope,
  message,
}: NotificationShape) {
  return (
    <div className="bg-tertiary p-4 rounded-xl my-4">
      <div className="flex">
        <div>
          <h4 className="font-semibold">
            {i18n(`texts.notifications.title_${scope}_${action.toLowerCase()}`)}
          </h4>
        </div>
        <div>
          <span></span>
        </div>
      </div>
      <div className="flex items-center">
        <div>
          <p className="text-secondary text-sm">
            {message ??
              i18n(`texts.notifications.text_${scope}_${action.toLowerCase()}`)}
          </p>
          <span className="text-secondary text-sm mt-4">
            {dayjs().format("DD/MM/YYYY - HH:mm")}
          </span>
        </div>
      </div>
    </div>
  );
}
