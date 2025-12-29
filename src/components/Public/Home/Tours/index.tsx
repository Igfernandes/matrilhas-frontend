import { ToursRelations } from "@components/Public/Tours/ToursRelations";
import { MonthSlides } from "@components/shared/layouts/MonthSlides";
import { Section } from "@components/shared/layouts/Section";
import { publicRoutes } from "@configs/routes/Web/navigation";
import dayjs from "dayjs";
import Link from "next/link";
import { useState } from "react";

export function Tours() {
    const [targetMonth, setTargetMonth] = useState<number>(dayjs().month() + 1);
    return (
        <Section>
            <div className="my-20">
                <div className="text-center">
                    <h2 className="text-primary text-3xl font-bold mb-2">Nossos Pacotes de Viagens</h2>
                    <p>Explore uma variedade de pacotes de viagens personalizados para suas próximas aventuras.</p>
                </div>
                <div className="text-center mt-5">
                    <Link href={publicRoutes.tours} className="text-primary underline text-lg font-semibold">
                        Ver todos os passeios
                    </Link>
                </div>
                <MonthSlides handleChangeMonth={setTargetMonth} />
                <ToursRelations slidesPerView={4} query={{
                    available_at: `${dayjs().year()}-${String(targetMonth).padStart(2, "0")}-00`
                }} />
            </div>
        </Section>
    )
}