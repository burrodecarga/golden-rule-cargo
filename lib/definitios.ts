export type ServiciosTableType={
    id: string
    name: string
    email: string
    image_url: string
    total_invoices: number
    total_pending: number
    total_paid: number
}

export type FormattedServiciosTable={
    id: string
    orden: string
    ruta: string
    precio_de_servicio: number
    chofer: string
    estatus_pago: string
    fecha_carga: string

}

export type ServicioField={
    activo?: number
    ano?: number
    bol?: string
    broker?: string
    carga?: string
    chofer?: string
    chofer_id?: string
    created_at?: string
    despachador?: string
    destino?: string
    dia?: number
    dia_de_semana?: number
    estatus_pago?: string
    estatus_servicio?: string
    fecha_carga?: string
    fecha_entrega?: string
    forma_de_pago?: string
    gasto_estimado?: number
    id?: string
    info_pago?: string
    millas?: number
    num_descargas?: number
    observaciones?: string
    orden?: string
    origen?: string
    peso?: number
    plataforma?: string
    pod?: string
    precio_de_servicio?: number
    precio_mano_de_obra?: number
    rc?: string
    ruta?: string
    semana?: number
    tipo_de_carga?: string
    vehiculo?: string
    vehiculo_id?: string
}
