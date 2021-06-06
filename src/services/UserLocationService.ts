import { getCustomRepository } from "typeorm"
import { UserLocationRepository } from "../repositories/UserLocationRepository"

interface IUserLocation {
  id_info_point : number;
  user_id : number;
  location : string;
}

class UserLocationService {
  async create({id_info_point,user_id, location } : IUserLocation){
    const userLocationRepository = getCustomRepository(UserLocationRepository);
    
    const userLocation = userLocationRepository.create({
      id_info_point,
      user_id,
      location
    });

    await userLocationRepository.save(userLocation);

    return userLocation;
  
  }
}

export { UserLocationService }