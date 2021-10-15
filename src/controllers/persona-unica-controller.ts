import { Request, Response } from "express";
import { GetPool } from "../database";

export class PersonaUnicaController {
  public async getOne(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const result = await pool
        .request()
        .input("id", req.params.id)
        .query("SELECT * FROM VW_PU_Formularios WHERE id = @id");
      res.send(result.recordset[0]);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getAll(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const result = await pool
        .request()
        .query("SELECT * FROM VW_PU_Formularios");
      res.send(result.recordset);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async postData(req: Request | any, res: Response) {
    const json = req.body;
    const query = `INSERT INTO PU_FormularioPersonaUnica (nombreEjecutivo, respuestaJson) VALUES (@user, @json)`;
    const jsonStr = JSON.stringify(json);
    try {
      const pool = await GetPool();
      await pool
        .request()
        .input("json", jsonStr)
        .input("user", json.nombreEjecutivo)
        .query(query);
      res.send({ error: false, mensaje: "respuesta ingresada" });
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
