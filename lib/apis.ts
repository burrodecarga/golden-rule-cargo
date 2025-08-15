import { createClient } from "./supabase/server"

export const fetchServicios=async () => {
    const supabase=await createClient()
    const { data: servicios }=await supabase.from("servicios").select('*')
    return JSON.stringify(servicios, null, 2)
}

