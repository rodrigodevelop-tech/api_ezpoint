import {  Request, Response } from 'express';
import { UserService } from '../services/UserService';
import  bcrypt from 'bcrypt' ;

class UserController {
  async login(req : Request,res : Response){

    const { email, password} = req.body;
    
    const userService = new UserService();

    try{
      const userLogin  = await userService.login({
        email,
        password
      });

      return res.json(userLogin);
    }catch(err){
      return res.status(400).json(
        {message: "User not exists"}
      );
    }

  }

  async create(req : Request,res : Response){

      const {
        name,
        company,
        email,
        password,
        hours_start,
        hours_end
      } = req.body;

     const passwordHash = await bcrypt.hash(password,8);
    
     const userService = new UserService(); 
      try{
          const users = await userService.create({
            name,
            company,
            email,
            password:passwordHash,
            hours_start,
            hours_end
          });
        
          return res.json(users);

      } catch(err){
        return res.status(400).json(
          err.message
        );
      }
     
  }
}
export {UserController}