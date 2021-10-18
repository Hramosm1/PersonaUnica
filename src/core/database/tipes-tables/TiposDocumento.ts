import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TDocumento } from "../models/tiposModel";

export class TiposDocumento implements CrudModel<TDocumento> {
  public async getAll(): Promise<IResult<TDocumento>> {
    const pool = await GetPool();
    const result: IResult<TDocumento> = await pool
      .request()
      .query("SELECT * FROM PU_TiposDocumento");
    return result;
  }
}
