import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn,  
  ManyToOne, 
  OneToOne, 
  PrimaryGeneratedColumn 
} from "typeorm";
import { InfoPoint } from "./InfoPoint";
import { User } from "./User";

import {  v4 as uuid } from 'uuid';

@Entity("user_location")
class UserLocation {
      @Column()
      id                : string;

      @PrimaryGeneratedColumn()
      id_user_location  : number;

      @JoinColumn({name:"id_info_point"})
      @OneToOne(()=> InfoPoint)
      infoPoint : InfoPoint;

      @Column()
      id_info_point     : number;

      @JoinColumn({name:"user_id"})
      @ManyToOne(()=> User)  
      user : User;

      @Column()
      user_id           : number;

      @Column()
      location : string;
      
      @CreateDateColumn()
      create_at         : Date;

      constructor(){
        if(!this.id)
          this.id = uuid();
      }
}

export {UserLocation}