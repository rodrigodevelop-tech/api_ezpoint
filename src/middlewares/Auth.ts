import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

class Auth {
  async AuthLogin(req: Request, res: Response, next: NextFunction){
    const authHeader = req.headers.authorization;

    if(!authHeader)
      return res.status(401).json({message: 'Token is required'});
    
    //Bearer asada54akjlkj12k31jlkj
    const [ ,token] =authHeader.split(' ');

    try{

      await jwt.verify(token, process.env.APP_SECRET);
      next();
      
    } catch(err){
      return res.status(401).json({message:'Token invalid'})
    }

  }
}

export {Auth}