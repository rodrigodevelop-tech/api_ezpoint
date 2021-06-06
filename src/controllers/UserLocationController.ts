import {  Request, Response } from 'express';
import { UserLocationService } from '../services/UserLocationService';

class UserLocationController {
  async create(req: Request, res : Response){
    const {
      id_info_point,
      user_id,
      location
    } = req.body;

    const userLocationService = new UserLocationService();

    const userLocation = await userLocationService.create({
      id_info_point,
      user_id,
      location
    });

    return res.json(userLocation);
    
  }
}

export { UserLocationController }