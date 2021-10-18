import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TPaginaWeb } from "../models/tiposModel";

export class TiposPaginaWeb implements CrudModel<TPaginaWeb> {
  public async getAll(): Promise<IResult<TPaginaWeb>> {
    const pool = await GetPool();
    const result: IResult<TPaginaWeb> = await pool
      .request()
      .query("SELECT * FROM PU_TiposPaginaWeb");
    return result;
  }
}
