import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { TGenero } from "../models/tiposModel";

export class Generos implements CrudModel<TGenero>{
  static async getAll(): Promise<IResult<TGenero>> {
    const pool = await GetPool();
    const result: IResult<TGenero> = await pool
      .request()
      .query("SELECT * FROM PU_Generos");
    return result;
  }
}
