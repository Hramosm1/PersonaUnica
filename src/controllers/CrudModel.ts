import { Request, Response } from "express";

export interface CrudModel {
    GetAll(req: Request, res: Response): any;
    GetOne(req: Request, res: Response): any;
    Create(req: Request, res: Response): any;
    Edit(req: Request, res: Response): any;
    Delete(req: Request, res: Response): any;
}