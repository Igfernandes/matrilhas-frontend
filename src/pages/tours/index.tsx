import { Footer } from "@components/Public/External/Footer";
import { Header } from "@components/Public/External/Header";
import { Tours } from "@components/Public/Tours";
import { Section } from "@components/shared/layouts/Section";

export default function ToursPage() {

    return (
        <>
            <Header />
            <Section>
                <Tours />
            </Section>
            <Footer />
        </>
    )
}