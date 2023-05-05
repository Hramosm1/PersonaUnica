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
import supertest from "supertest";

export class App {
  readonly app: Application;
  constructor(port?: number | string) {
    this.app = express();
    this.settings();
    this.midlewares();
    this.routes();
  }
  //configuraciones del servidor
  private settings(): void {
    this.app.set("port", process.env.PORT || 9421);
  }
  //midlewares a implementar
  private midlewares(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
  }
  //rutas
  private routes(): void {
    this.app.get("/", (req, res) => {
      res.send({ mensaje: "funciona" });
    });
    this.app.use("/login", login);
    this.app.use("/perfiles", personaunica);
    this.app.use("/tipos", tipos);
    this.app.use("/empresas", empresas);
    this.app.use("/nombres", nombres);
    this.app.use("/correos", correos);
    this.app.use("/empleos", empleos);
    this.app.use("/documentos", documentos);
    this.app.use("/telefonos", telefonos);
    this.app.use("/direcciones", direcciones);
    this.app.use("/contactos", contactos);
    this.app.use("/referenciasWeb", referenciasWeb);
  }

  //funcion publica que inicia el servidor
  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log("server on port: ", this.app.get("port"));
  }
}

export const servidor = new App()
export const request = supertest(servidor.app)