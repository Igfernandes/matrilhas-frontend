export type ActionsBarProps = {
  actions: ActionShape[];
  amount?: number;
};
type ActionShape = {
  text: string;
  handle: () => void;
};
