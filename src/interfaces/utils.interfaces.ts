import { Prisma } from "@prisma/client"

export interface EmpresasParamsResult {
  take: number
  pageNumber: number
  skip: number
  where: Prisma.PU_PerfilWhereInput
}