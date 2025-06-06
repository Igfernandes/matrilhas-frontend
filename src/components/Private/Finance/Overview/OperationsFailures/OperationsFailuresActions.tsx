import { DotsOptions } from "@components/shared/others/DotsOptions";
import i18n from "@configs/i18n";
import { useSnackbar } from "@hooks/useSnackbar";
import usePostOperationsFailures from "@services/OperationsFailures/Post/usePostOperationsFailures";

type Props = {
  id: number;
};

export function OperationsFailuresActions({ id }: Props) {
  const { mutateAsync: postOperationsFailures } = usePostOperationsFailures();
  const { dispatchSnackbar } = useSnackbar();

  return (
    <div className="flex justify-center">
      <DotsOptions
        actions={[
          {
            text: i18n("words.fixing"),
            handle: () => {
              dispatchSnackbar({
                type: "notice",
                message: i18n("words.awaiting"),
              });
              postOperationsFailures({ id });
            },
          },
        ]}
      />
    </div>
  );
}
