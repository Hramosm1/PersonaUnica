//importaciones de express
import express, { Application, json, urlencoded } from "express";
import cors from "cors";
//importacion de rutas
import login from "./routes/login.router";
import personaunica from "./routes/persona-unica.router";
import tipos from "./routes/tipos.router";
import empresas from "./routes/empresas-router";
import nombres from "./routes/nombres";
import correos from "./routes/correos";
import empleos from "./routes/empleos";
import documentos from "./routes/documentos";
import telefonos from "./routes/telefonos";
import direcciones from "./routes/direcciones";
import contactos from "./routes/contactos";
import referenciasWeb from "./routes/referenciasWeb";

export class App {
  base: string = "/node/api";
  private app: Application;
  constructor(port?: number | string) {
    this.app = express();
    this.settings();
    this.midlewares();
    this.routes();
  }
  //configuraciones del servidor
  private settings(): void {
    this.app.set("port", 9421);
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
    this.app.use(this.base + "/perfiles", personaunica);
    this.app.use(this.base + "/tipos", tipos);
    this.app.use(this.base + "/empresas", empresas);
    this.app.use(this.base + "/nombres", nombres);
    this.app.use(this.base + "/correos", correos);
    this.app.use(this.base + "/empleos", empleos);
    this.app.use(this.base + "/documentos", documentos);
    this.app.use(this.base + "/telefonos", telefonos);
    this.app.use(this.base + "/direcciones", direcciones);
    this.app.use(this.base + "/contactos", contactos);
    this.app.use(this.base + "/referenciasWeb", referenciasWeb);
  }

  //funcion publica que inicia el servidor
  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log("server on port: ", this.app.get("port"));
  }
}
