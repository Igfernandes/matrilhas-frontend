import { Search } from "@components/shared/forms/Search";
import { useI18n } from "@contexts/I18n";

type Props = {
  handleSearch: (words: string) => void;
};

export function OptionsBar({ handleSearch }: Props) {
  const { t } = useI18n()
  return (
    <div className="flex justify-between flex-wrap md:flex-nowrap mb-6">
      <Search
        label={t("Words.research")}
        dataTestId="users"
        handleSearch={handleSearch}
        className="w-full md:w-[50%]"
      />
    </div>
  );
}
