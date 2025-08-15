import ListadoDeServicios from "@/components/db/servicios/listado_de_servicios"

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
