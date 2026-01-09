import { GraphicPayments } from "./GraphicPayments";
import { GraphicsSales } from "./GraphicSales";
import { GraphicsClients } from "./GraphicsClients";

export function Graphics() {

    return (
        <div className="flex flex-wrap justify-between">
            <GraphicsSales />
            <GraphicPayments />
            <GraphicsClients />
        </div>
    )
}