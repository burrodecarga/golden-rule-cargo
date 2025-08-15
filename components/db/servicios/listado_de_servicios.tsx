import { fetchServicios } from "@/lib/apis"
import ServiciosTable from "./servicios_table"


export default async function ListadoDeServicios() {

    const data=await fetchServicios()



    return (
        <>
            <ServiciosTable servicios={data} /></>

    )
}
