import { Prisma } from "@prisma/client";
import { EmpresasParams } from "../interfaces/empresas.interface";
import { EmpresasParamsResult } from "../interfaces/utils.interfaces";

export function getQueryFilter(queryParams: any): Prisma.PU_PerfilWhereInput | undefined {
  if (Object.keys(queryParams).length > 0) {
    const filter: any[] = []
    for (const key in queryParams) {
      switch (key) {
        case 'nombre':
          filter.push({ PU_Nombres: { some: { nombre: { contains: queryParams[key] } } } })
          break;
        case 'documento':
          filter.push({ PU_Documentos: { some: { documento: { contains: queryParams[key] } } } })
          break;
        case 'primerApellido':
          filter.push({ [key]: { contains: queryParams[key] } })
          break;
        case 'segundoApellido':
          filter.push({ [key]: { contains: queryParams[key] } })
          break;
        case 'razonSocial':
          filter.push({ [key]: { contains: queryParams[key] } })
          break;
        case 'tipo':
          filter.push({ [key]: { equals: parseInt(queryParams[key]) } })
          break;
        default:
          break;
      }
    }
    return { AND: filter }
  } else {
    return undefined
  }
}
export function getFilterOfEmpresas({ take, page, filter }: EmpresasParams | any): EmpresasParamsResult {
  const t = parseInt(take)
  const p = parseInt(page)
  const skip = t * p
  let where: Prisma.PU_PerfilWhereInput = { tipo: { equals: 2 } }
  if (filter != '') {
    where.OR = [{ razonSocial: { contains: filter } }, { PU_Nombres: { some: { nombre: { contains: filter } } } }]
  }
  return { skip, take: t, pageNumber: p, where }
}