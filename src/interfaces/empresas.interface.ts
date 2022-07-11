import { Page } from "./interfaces-perfiles"

export interface EmpresasParams {
  take: string,
  page: string,
  filter: string
}
export interface resultEmpresas {
  data: Array<dataList>,
  pageData: Page
}

export type TypeEmpresas = {
  data: Array<dataList>,
  pageData: Page
}
export interface dataList {
  id: string;
  razonSocial: string | null;
  PU_Nombres: Array<{ nombre: string }>;
}