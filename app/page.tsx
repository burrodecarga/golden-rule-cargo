import ListadoDeServicios from "@/components/db/servicios/listado_de_servicios"
import { fetchServicios } from "@/lib/apis"
import { createClient } from "@/lib/supabase/server"

export default async function Home() {

  // const supabase=await createClient()
  // const { data, error }=await supabase.from('servicios').select("*")
  // if (error) {
  //   console.log(error)
  // }

  return (
    <ListadoDeServicios />
  )
}
