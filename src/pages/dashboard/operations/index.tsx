import { DashboardContainer } from "@components/shared/layouts/Dashboard";
import { useSearch } from "@components/shared/forms/Search/hooks/useSearch";
import { OptionsBar } from "@components/Private/Operations/OptionsBar";
import { OperationsFailures } from "@components/Private/Operations/OperationsFailures";

export default function Operations() {
    const { handleSearch, search } = useSearch();

    return (
        <DashboardContainer>
            <OptionsBar handleSearch={handleSearch} />
            <div className="relative z-10">
                <OperationsFailures
                    operationsFailures={[]}
                    search={search}
                />
            </div>
        </DashboardContainer>
    );
}
