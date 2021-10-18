import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TTelefono } from "../models/tiposModel";

export class TiposTelefono implements CrudModel<TTelefono> {
  public async getAll(): Promise<IResult<TTelefono>> {
    const pool = await GetPool();
    const result: IResult<TTelefono> = await pool
      .request()
      .query("SELECT * FROM PU_TiposTelefono");
    return result;
  }
}
