export interface PerfilSinNombres {
  id: string,
  primerApellido: string
  segundoApellido: string
  razonSocial: string
  documento: any
  tipoPersona: string
}
export interface Page {
  // The number of elements in the page
  take: number
  // The total number of elements
  totalElements: number
  // The total number of pages
  totalPages: number
  // The current page number
  pageNumber: number
}