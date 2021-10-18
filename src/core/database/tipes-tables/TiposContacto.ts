import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TContacto } from "../models/tiposModel";

export class TiposContacto implements CrudModel<TContacto> {
  public async getAll(): Promise<IResult<TContacto>> {
    const pool = await GetPool();
    const result: IResult<TContacto> = await pool
      .request()
      .query("SELECT * FROM PU_TiposContacto");
    return result;
  }
}
