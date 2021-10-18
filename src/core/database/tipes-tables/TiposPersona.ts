import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { tPersona } from "../models/tiposModel";

export class TiposPersona implements CrudModel<tPersona> {
  public async getAll(): Promise<IResult<tPersona>> {
    const pool = await GetPool();
    const result: IResult<tPersona> = await pool
      .request()
      .query("SELECT * FROM PU_TiposPersona");
    return result;
  }
}
