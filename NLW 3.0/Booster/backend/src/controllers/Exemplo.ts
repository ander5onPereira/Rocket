import {Request, Response} from "express";

export default class Exemplo{
  async index(req:Request,res:Response){
    
    return res.json({message:"ok"});
  }
  async create(req:Request,res:Response){
    const data=req.body;
    console.log(data);
    return res.status(201).send();
  }
}