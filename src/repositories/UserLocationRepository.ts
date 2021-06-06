import { Repository, EntityRepository } from 'typeorm';
import {  UserLocation } from '../entities/UserLocation';

@EntityRepository(UserLocation)
class UserLocationRepository extends Repository<UserLocation>{}

export {  UserLocationRepository }