import { Request, Response } from "express";
import { GetPool } from "../database";

export class TiposController {
  /**
   * getGeneros
   */
  public async getGeneros(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool.request().query("SELECT * FROM PU_Generos");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoDocumento(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT * FROM PU_TiposDocumento");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoPersona(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT * FROM PU_TiposPersona");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTIpoContacto(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT * FROM PU_TiposContacto");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoTelefono(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT * FROM PU_TiposTelefono");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoOrigen(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT * FROM PU_TiposOrigen");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getTipoPaginaWeb(req: Request, res: Response) {
    try {
      const pool = await GetPool();
      const response = await pool
        .request()
        .query("SELECT * FROM PU_TiposPaginaWeb");
      res.send(response.recordset);
    } catch (error: any) {
      res.send({ error: true, mensaje: error.message });
    }
  }
}
