export interface PerfilSinNombres {
  id: string,
  primerApellido: string
  segundoApellido: string
  razonSocial: string
  documento: any
  tipoPersona: string
}
export interface Page {
  take: number
  totalElements: number
  totalPages: number
  pageNumber: number
}