import { Database } from "@/db_types"
import { createClient } from "./supabase/server"
import { QueryData } from "@supabase/supabase-js"
import { STRING_COLUMNAS_SERVICIOS, STRING_COLUMNAS_SERVICIOS_AND_RELATIONS } from "./const_column"

export const fetchServicios=async () => {
    const supabase=await createClient()
    const { data }=await supabase.from("servicios").select(STRING_COLUMNAS_SERVICIOS)
    //console.log('SEVER', data)
    return data
}

export type FetchServiciosQuery=QueryData<typeof fetchServicios>
export type FetchServicios=Awaited<ReturnType<typeof fetchServicios>>
export type DBServicios=Database["public"]["Tables"]["servicios"]["Row"]
export type Servicio=[number]

export type FetchServiciosAndRelationsQuery=QueryData<typeof fetchServiciosAndRelations>
export type FetchServiciosAndRelations=Awaited<ReturnType<typeof fetchServiciosAndRelations>>
export type DBServiciosAndRelations=Database["public"]["Tables"]["servicios"]["Row"]
export type ServicioAndRelations=[number]

export const fetchServiciosAndRelations=async () => {
    const supabase=await createClient()
    const { data, error }=await supabase.from("servicios").select(STRING_COLUMNAS_SERVICIOS_AND_RELATIONS)
    if (error) {
        console.log(error)
        throw new Error("Error fetching servicios and relations")

    }
    if (!data) return []

    return data
}




