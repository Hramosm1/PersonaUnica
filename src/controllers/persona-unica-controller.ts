import { Request, Response } from "express";
import { GetPool } from "../database";

export class PersonaUnicaController {
  public async postData(req: Request | any, res: Response) {
    const json = req.body;
    const query = `INSERT INTO PU_FormularioPersonaUnica (nombre_ejecutivo, respuesta_json) VALUES (@user, @json)`;
    const jsonStr = JSON.stringify(json);
    try {
      const pool = await GetPool();
      const result = await pool
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
