import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TOrigen } from "../models/tiposModel";

export class TiposOrigen implements CrudModel<TOrigen> {
  public async getAll(): Promise<IResult<TOrigen>> {
    const pool = await GetPool();
    const result: IResult<TOrigen> = await pool
      .request()
      .query("SELECT * FROM PU_TiposOrigen");
    return result;
  }
}
