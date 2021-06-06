import { EntityRepository, Repository } from "typeorm";
import { InfoPoint } from "../entities/InfoPoint";

@EntityRepository(InfoPoint)
class InfoPointsRepository extends Repository<InfoPoint>{}

export {InfoPointsRepository}
