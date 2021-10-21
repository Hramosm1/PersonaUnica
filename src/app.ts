//importaciones de express
import express, { Application, json, urlencoded } from "express";
import cors from "cors";
//importacion de rutas
import login from "./routes/login.router";
import personaunica from "./routes/persona-unica.router";
import tipos from "./routes/tipos.router";
import empresas from "./routes/empresas-router";

export class App {
  base: string = "/api";
  private app: Application;
  constructor(port?: number | string) {
    this.app = express();
    this.settings();
    this.midlewares();
    this.routes();
  }
  //configuraciones del servidor
  private settings(): void {
    this.app.set("port", process.env.PORT || 3000);
  }
  //midlewares a implementar
  private midlewares(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
  //rutas
  private routes(): void {
    this.app.get(this.base, (req, res) => {
      res.send({ mensaje: "hola mundo" });
    });
    this.app.use(this.base + "/login", login);
    // this.app.use(this.base + "/perfiles", personaunica);
    // this.app.use(this.base + "/tipos", tipos);
    // this.app.use(this.base + "/empresas", empresas);
  }

  //funcion publica que inicia el servidor
  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log("server on port: ", this.app.get("port"));
  }
}
