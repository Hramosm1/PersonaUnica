import { prisma } from "../database";
import { Request, Response } from "express";
import { Page, PerfilSinNombres } from "../interfaces/interfaces-perfiles";
import { getQueryFilter } from "../core/util";

export class PersonaUnicaController {
  public async getOne(req: Request, res: Response) {

    const { id } = req.params;
    try {
      const perfil: object[] = await prisma.$queryRawUnsafe(
        `SELECT 
    p.genero, 
    CONVERT(varchar, p.fecha, 103) AS fecha, 
    p.primerApellido, 
    p.segundoApellido, 
    p.personaUnica, 
    p.razonSocial, 
    p.observaciones,
    p.tipo,
    tp.tipoPersona
FROM PU_Perfil p
INNER JOIN PU_TiposPersona tp
ON p.tipo = tp.id
WHERE p.id = '${id}'`
      );
      const nombres = await prisma.$queryRawUnsafe(
        `SELECT id, nombre FROM PU_Nombres WHERE idPerfil = '${id}' ORDER BY orden`
      );
      const contactos = await prisma.$queryRawUnsafe(
        `SELECT c.id, c.nombreCompleto, c.telefono, o.tipoOrigen AS origenInformacion, t.tipoContacto FROM PU_Contactos AS c INNER JOIN PU_TiposOrigen AS o ON c.origenInformacion = o.id INNER JOIN PU_TiposContacto AS t ON c.tipoContacto = t.id WHERE idPerfil = '${id}'`
      );
      const correos = await prisma.$queryRawUnsafe(
        `SELECT c.id, c.correo, t.tipoOrigen AS origenInformacion FROM PU_Correos AS c INNER JOIN PU_TiposOrigen AS t ON c.origenInformacion = t.id WHERE idPerfil = '${id}'`
      );
      const direcciones = await prisma.$queryRawUnsafe(
        `SELECT d.id, d.departamento, d.municipio, d.zona, d.colonia, d.direccion, d.referencia, o.tipoOrigen AS origenInformacion FROM PU_Direcciones AS d INNER JOIN PU_TiposOrigen AS o ON d.origenInformacion = o.id WHERE idPerfil = '${id}'`
      );
      const documentos = await prisma.$queryRawUnsafe(
        `SELECT d.id, d.documento, t.tipoDocumento AS tipo FROM PU_Documentos AS d INNER JOIN PU_TiposDocumento AS t ON d.tipo = t.id WHERE idPerfil = '${id}'`
      );
      const telefonos = await prisma.$queryRawUnsafe(
        `SELECT t.id, t.codigoPais, t.telefono, tt.tipoTelefono AS tipoTelefono, o.tipoOrigen AS origenInformacion FROM PU_Telefonos AS t INNER JOIN PU_TiposTelefono AS tt ON t.tipoTelefono = tt.id INNER JOIN PU_TiposOrigen AS o ON t.origenInformacion = o.id WHERE idPerfil = '${id}'`
      );
      const referenciasWeb = await prisma.$queryRawUnsafe(
        `SELECT r.id, r.link, tp.tipoPaginaWeb AS tipo, o.tipoOrigen AS origenInformacion FROM PU_ReferenciasWeb AS r INNER JOIN PU_TiposPaginaWeb AS tp ON r.tipo = tp.id INNER JOIN PU_TiposOrigen AS o ON r.origenInformacion = o.id WHERE idPerfil = '${id}'`
      );
      const empleos = await prisma.$queryRawUnsafe(
        `SELECT e.id, p.razonSocial AS empresa, e.puesto, e.fechaInicio, e.fechaFin, o.tipoOrigen AS origenInformacion FROM PU_Empleos AS e INNER JOIN PU_TiposOrigen AS o ON e.origenInformacion = o.id INNER JOIN PU_Perfil AS p ON e.empresa = p.id WHERE idPerfil = '${id}'`
      );

      const result = {
        id: id,
        nombres: nombres,
        contactos: contactos,
        correos: correos,
        direcciones: direcciones,
        documentos: documentos,
        telefonos: telefonos,
        referenciasWeb: referenciasWeb,
        empleos: empleos,
        ...perfil[0],
      };
      res.send(result);
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async getAll(req: Request, res: Response) {
    const take = parseInt(req.params.take)
    const pageNumber = parseInt(req.params.page)
    const skip = take * pageNumber
    const where = getQueryFilter(req.query)
    try {
      const data = await prisma.pU_Perfil.findMany({
        select: {
          id: true,
          primerApellido: true,
          segundoApellido: true,
          razonSocial: true,
          PU_TiposPersona: { select: { tipoPersona: true } },
          PU_Documentos: { take: 1, select: { documento: true } },
          PU_Nombres: { select: { nombre: true }, orderBy: { orden: 'asc' } }
        },
        orderBy: [{ razonSocial: 'asc' }, { primerApellido: 'asc' }, { segundoApellido: 'asc' }],
        skip,
        take,
        where
      })
      const totalElements = await prisma.pU_Perfil.count({ where })
      const pageData: Page = { pageNumber, take, totalElements, totalPages: Math.ceil(totalElements / take) }
      res.send({ pageData, data })
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async updatePerfil(req: Request, res: Response) {

    const { id } = req.params;
    const {
      primerApellido,
      segundoApellido,
      genero,
      fecha,
      observaciones,
      razonSocial,
    } = req.body;
    const fFecha = fecha.split("/").reverse().join("");
    try {
      const result = await prisma.$queryRawUnsafe(
        `UPDATE PU_Perfil SET primerApellido='${primerApellido}', segundoApellido='${segundoApellido}',fecha='${fFecha}',genero=${genero},observaciones='${observaciones}',razonSocial='${razonSocial}' WHERE id ='${id}'`
      );
      res.send({ error: false, mensaje: result });
    } catch (error: any) {
      console.error(error);
      res.send({ error: true, mensaje: error.message });
    }
  }
  public async postData(req: Request, res: Response) {

    let existe = false;
    const {
      nombres,
      correos,
      empleos,
      documentos,
      telefonos,
      direcciones,
      contactos,
      referenciasWeb,
    } = req.body;
    if (documentos.length > 0) {
      req.body.personaUnica = true;
      for (let i = 0; i < documentos.length; i++) {
        const documento = documentos[i];
        if (
          (await prisma.pU_Documentos.count({
            where: { documento: documento.documento, tipo: documento.tipo },
          })) > 0
        ) {
          existe = true;
          break;
        }
      }
    }
    if (existe) {
      res.send({
        error: true,
        mensaje: "ya existe un perfil con ese documento",
      });
    } else {
      const date = req.body.fecha == "" ? null : req.body.fecha;
      try {
        const { id } = await prisma.pU_Perfil.create({
          data: {
            primerApellido: req.body.primerApellido,
            segundoApellido: req.body.segundoApellido,
            genero: req.body.genero,
            tipo: req.body.tipo,
            razonSocial: req.body.razonSocial,
            fecha: date,
            observaciones: req.body.observaciones,
            personaUnica: req.body.personaUnica,
            nombreEjecutivo: req.body.nombreEjecutivo,
          },
        });
        for (let i = 0; i < nombres.length; i++) {
          const data = nombres[i];
          await prisma.pU_Nombres.create({
            data: { idPerfil: id, nombre: data, orden: i },
          });
        }
        for (let i = 0; i < correos.length; i++) {
          const data = correos[i];
          await prisma.pU_Correos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < empleos.length; i++) {
          const data = empleos[i];
          await prisma.pU_Empleos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < documentos.length; i++) {
          const data = documentos[i];
          await prisma.pU_Documentos.create({
            data: { idPerfil: id, ...data },
          });
        }
        for (let i = 0; i < telefonos.length; i++) {
          const data = telefonos[i];
          await prisma.pU_Telefonos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < direcciones.length; i++) {
          const data = direcciones[i];
          await prisma.pU_Direcciones.create({
            data: { idPerfil: id, ...data },
          });
        }
        for (let i = 0; i < contactos.length; i++) {
          const data = contactos[i];
          await prisma.pU_Contactos.create({ data: { idPerfil: id, ...data } });
        }
        for (let i = 0; i < referenciasWeb.length; i++) {
          const data = referenciasWeb[i];
          await prisma.pU_ReferenciasWeb.create({
            data: { idPerfil: id, ...data },
          });
        }
        res.send({ error: false, mensaje: "respuesta ingresada" });
      } catch (error: any) {
        res.send({ error: true, mensaje: error.message });
      }
    }
  }
}
