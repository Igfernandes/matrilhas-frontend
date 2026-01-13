import { When } from "@components/utilities/When";
import { Definitions } from "./Definitions";
import { Send } from "./Send";

type Props = {
  step: number;
} ;

export function MessagesDispatcherForm({
  step
}: Props) {

  return (
    <div className="mt-6 p-6 bg-white">
      <When value={step === 1}>
        <Definitions />
      </When>
      <When value={step === 2}>
        <Send
        />
      </When>
    </div>
  );
}
