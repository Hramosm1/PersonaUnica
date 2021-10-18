import { IResult } from "mssql";

export interface CrudModel<T> {
  getAll(): Promise<IResult<T>>;
  getById?(id: number | string): Promise<IResult<T>>;
  create?(): Promise<IResult<T>>;
  editById?(id: number | string): Promise<IResult<T>>;
  deleteById?(id: number | string): Promise<IResult<T>>;
}
