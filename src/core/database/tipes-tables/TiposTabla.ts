import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { tTabla } from "../models/tiposModel";

export class TiposTabla implements CrudModel<tTabla> {
  public async getAll(): Promise<IResult<tTabla>> {
    const pool = await GetPool();
    const result: IResult<tTabla> = await pool
      .request()
      .query("SELECT * FROM PU_TiposTabla");
    return result;
  }
}
