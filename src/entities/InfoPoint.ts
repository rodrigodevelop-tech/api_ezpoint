import { 
  Column, 
  Entity, 
  PrimaryGeneratedColumn, 
  CreateDateColumn, 
  ManyToOne, 
  JoinColumn 
} from "typeorm";

import { v4 as uuid } from 'uuid';
import { User } from "./User";

@Entity("info_points")
class InfoPoint {
  @Column()
  id                : string;

  @PrimaryGeneratedColumn()
  id_info_point     : number;

  @JoinColumn({name:"user_id"})
  @ManyToOne(()=> User)  
  user : User;

  @Column()
  user_id           : number;

  @Column()
  date_hours_start  : Date;
  
  @Column()
  date_hours_end    : Date;
  
  @CreateDateColumn()
  create_at         : Date;

  constructor(){
    if(!this.id)
      this.id = uuid();
  }

}

export {InfoPoint}