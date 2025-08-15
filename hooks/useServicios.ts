import { fetchServicios } from '@/lib/apis'
import { useQuery } from '@tanstack/react-query'

export const useServicios=() => {
    const { data, isLoading, isError, error, isPending, isFetching }=useQuery({
        queryKey: ['fetchServicios'],
        queryFn: fetchServicios,
        staleTime: 0,//12 horas

    })

    return { data, isError, isLoading, isPending, error, isFetching }
}