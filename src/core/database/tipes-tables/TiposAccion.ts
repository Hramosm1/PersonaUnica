import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TAccion } from "../models/tiposModel";

export class TiposAccion implements CrudModel<TAccion> {
  public async getAll(): Promise<IResult<TAccion>> {
    const pool = await GetPool();
    const result: IResult<TAccion> = await pool
      .request()
      .query("SELECT * FROM PU_TiposAccion");
    return result;
  }
}
