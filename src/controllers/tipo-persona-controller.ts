import { Request, Response } from "express";
import { GetPool } from "../database";

export class TipoPersonaController {
  public async getAll(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT id, tipo_persona FROM PU_TipoPersona");
      res.send(response.recordset);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
