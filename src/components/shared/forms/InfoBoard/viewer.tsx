type Props = {
  children: React.ReactNode;
};

export function InfoBoard({ children }: Props) {
  return (
    <div>
      <table className="w-full">
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
