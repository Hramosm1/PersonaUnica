import { query } from "express";
import { IResult } from "mssql";
import { GetPool } from "../../../database";
import { CrudModel } from "../crudModel";
import { tFormularioPersonaUnica } from "../models/tablasModels";

export class FormularioPersonaUnica
  implements CrudModel<tFormularioPersonaUnica>
{
  public async getAll(): Promise<IResult<tFormularioPersonaUnica>> {
    const pool = await GetPool();
    const result: IResult<tFormularioPersonaUnica> = await pool
      .request()
      .query("select * from ");
    return result;
  }
  public async getById(): Promise<IResult<tFormularioPersonaUnica>> {
    const pool = await GetPool();
    const result: IResult<tFormularioPersonaUnica> = await pool
      .request()
      .query("");
    return result;
  }
  public async create(): Promise<IResult<tFormularioPersonaUnica>> {
    const pool = await GetPool();
    const result: IResult<tFormularioPersonaUnica> = await pool
      .request()
      .query("");
    return result;
  }
  public async editById(): Promise<IResult<tFormularioPersonaUnica>> {
    const pool = await GetPool();
    const result: IResult<tFormularioPersonaUnica> = await pool
      .request()
      .query("");
    return result;
  }
  public async deleteById(): Promise<IResult<tFormularioPersonaUnica>> {
    const pool = await GetPool();
    const result: IResult<tFormularioPersonaUnica> = await pool
      .request()
      .query("");
    return result;
  }
}
