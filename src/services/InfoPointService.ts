import { getCustomRepository } from "typeorm"
import { InfoPointsRepository } from "../repositories/InfoPointsRepository"

interface IInfoPoints {
    user_id: number;
    date_hours_start : Date;
    date_hours_end? : Date;
}
 
class InfoPointService {
  async create({  user_id,date_hours_start,date_hours_end   } : IInfoPoints){
    const infoPointRepository = getCustomRepository(InfoPointsRepository);
    
    const infoPoint = infoPointRepository.create({
      user_id,
      date_hours_start,
      date_hours_end
    });

    await infoPointRepository.save(infoPoint);

    return infoPoint;
  }
}

export {InfoPointService}