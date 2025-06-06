import { MessagesDispatcherShape } from "@type/MessagesDispatcherShape";
import { FormBoardHeader } from "./FormBoard/header";
import { TSpan } from "@components/shared/forms/InfoBoard/fields/Span";
import i18n from "@configs/i18n";
import dayjs from "dayjs";
import { InfoBoard } from "@components/shared/forms/InfoBoard/viewer";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useForms } from "./hooks/useForms";
import { ClientsTable } from "@components/shared/others/ClientsTable";
import { FormProvider } from "react-hook-form";
import { ClientsModal } from "@components/shared/others/ClientsTable/modals/ClientsModal";
import { SmartTable } from "@components/shared/layouts/Tables/presets/SmartTable";
import { Button } from "@components/shared/forms/Button";

type Props = {
  dispatcher: MessagesDispatcherShape;
};

dayjs.extend(customParseFormat);
export function DispatcherPreview({ dispatcher }: Props) {
  const {
    clients,
    setClientsSelected,
    clientsSelected,
    formMethods,
    clientsDispatchers,
    isLoading,
    handleSubmit,
    submit,
  } = useForms({
    dispatcher,
  });

  console.log(formMethods.formState.errors);
  return (
    <>
      <div className="Logs mb-4">
        <SmartTable
          options={{
            filters: {
              tag: {
                key: "status",
              },
            },
          }}
          tHeads={{
            data: [
              i18n("words.name"),
              i18n("words.message"),
              i18n("words.status"),
              i18n("words.platform"),
              i18n("words.send_at"),
            ],
          }}
          data={clientsDispatchers.map((client) => ({
            name: client.client_name,
            message: client.message_title,
            status: i18n(`words.${client.status.toLocaleLowerCase()}`),
            platform: client.platform,
            send_at: client?.send_at,
          }))}
          title={i18n("words.dispatchers_historic")}
        />
      </div>
      <FormProvider {...formMethods}>
        <form onSubmit={handleSubmit(submit)}>
          <div className="bg-white py-7 px-4 rounded-lg">
            <div className="mb-6">
              <FormBoardHeader dispatcher={dispatcher} />
            </div>
            <InfoBoard>
              <TSpan
                text={i18n("words.title")}
                value={dispatcher.title}
                dataTestId="title"
              />
              <TSpan
                text={i18n("words.platforms")}
                value={dispatcher.platforms}
              />
              <TSpan
                text={i18n("words.period")}
                value={
                  dispatcher.period
                    ? i18n(`words.${dispatcher.period?.toLocaleLowerCase()}`)
                    : "--"
                }
              />
              <TSpan
                text={i18n("words.started_at")}
                value={dayjs(dispatcher.started_at).format("DD/MM/YYYY HH:mm")}
              />
              <TSpan
                text={i18n("words.scheduled_at")}
                value={dispatcher.scheduled_at ?? "--"}
              />
              <TSpan text={i18n("words.author")} value={dispatcher.author} />
            </InfoBoard>
          </div>
          <div className="mt-4">
            <ClientsTable
              clients={clients ?? []}
              handleUpdateClients={setClientsSelected}
              clientsSelected={clientsSelected}
            />
          </div>
          <div className="bg-white p-4  mt-4">
            <div className="max-w-[200px] ml-auto">
              <Button
                type="submit"
                text={i18n("words.update")}
                isLoading={isLoading}
              />
            </div>
          </div>
        </form>
      </FormProvider>
      <div className="mt-4">
        <ClientsModal
          clients={clients}
          handleAddClients={setClientsSelected}
          clientsSelected={clientsSelected}
        />
      </div>
    </>
  );
}
