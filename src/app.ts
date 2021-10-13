//importaciones de express
import express, { Application, json, urlencoded } from "express";
import cors from "cors";
//importacion de rutas
import login from "./routes/login.router";
import personaunica from "./routes/persona-unica.router";
import generos from "./routes/generos.router";
import tipoDocumentos from "./routes/tipo-documento-router";
import tipoPersona from "./routes/tipo-persona-router";
import empresas from "./routes/empresas-router";

export class App {
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
    this.app.get("/node/personaunica/", (req, res) => {
      res.send(process.env.USERNAME);
    });
    this.app.use("/node/personaunica/login", login);
    this.app.use("/node/personaunica/perfiles", personaunica);
    this.app.use("/node/personaunica/genero", generos);
    this.app.use("/node/personaunica/tipodocumento", tipoDocumentos);
    this.app.use("/node/personaunica/tipopersona", tipoPersona);
    this.app.use("/node/personaunica/empresas", empresas);
  }

  //funcion publica que inicia el servidor
  public async listen(): Promise<void> {
    await this.app.listen(this.app.get("port"));
    console.log("server on port: ", this.app.get("port"));
  }
}
