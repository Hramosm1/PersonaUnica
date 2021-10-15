import { Request, Response } from "express";
import { GetPool } from "../database";
import { Binary, VarChar } from "mssql";
import { Token } from "../token";

export class LoginController {
  public async login(req: Request, res: Response) {
    const _Token = new Token();
    const pool = await GetPool();
    const result = await pool
      .request()
      .input("user", VarChar(50), req.body.username)
      .input("pass", VarChar(50), req.body.password)
      .query(
        "SELECT idCobrador, estado, CoNombre as nombre, CoApellido as apellido FROM IC_Cobrador WHERE Usuario = @user AND Password = CAST(@pass AS binary)"
      );
    if (result.rowsAffected[0] > 0) {
      const user = result.recordset[0];
      const token = await _Token.crearToken(user);
      res.send({ token: token, ...user });
    } else {
      res.send({ token: null });
    }
  }
  public async hex(req: Request, res: Response) {
    const a: string = req.body.email;
    try {
      const pool = await GetPool();
      const result: any = await pool
        .request()
        .input("user", VarChar, req.body.email)
        .input("password", Binary, req.body.password)
        .query("select * from IC_Cobrador where Password = @password");
      const pass = Buffer.from(result.recordset.Password, "hex");
      res.send(pass);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
}
