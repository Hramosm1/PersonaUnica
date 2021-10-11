import { Request, Response } from "express";
import { GetPool } from "../database";

export class GeneroController {
  public async getAll(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT id, genero FROM PU_Generos");
      res.send(response.recordset);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
