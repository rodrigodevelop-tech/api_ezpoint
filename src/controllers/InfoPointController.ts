import {  Request, Response} from 'express';
import { InfoPointService } from '../services/InfoPointService';

class InfoPointController {
  async create(req : Request, res: Response){

    const {
      user_id,
      date_hours_start,
      date_hours_end
    } = req.body;

    const infoPointService= new InfoPointService();

    const infoPoint = await infoPointService.create({
      user_id,
      date_hours_start,
      date_hours_end
    });

    return res.json(infoPoint);
  }
}

export { InfoPointController  }