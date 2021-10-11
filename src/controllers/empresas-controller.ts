import { Request, Response } from "express";
import { GetPool } from "../database";
export class EmpresasController {
  public async GetAll(req: Request, res: Response): Promise<void> {
    try {
      const pool = await GetPool();
      const result = await pool.request().query("select * from VW_PU_Empresas");
      res.send(result.recordset);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
