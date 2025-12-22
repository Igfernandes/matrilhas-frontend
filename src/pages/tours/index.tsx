import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { SalesProvider } from "@components/Public/Sales/context";
import { Tours } from "@components/Public/Tours";
import { Section } from "@components/shared/layouts/Section";

export default function ToursPage() {

    return (
        <SalesProvider>
            <Header />
            <Section>
                <Tours />
            </Section>
            <Footer />
        </SalesProvider>
    )
}