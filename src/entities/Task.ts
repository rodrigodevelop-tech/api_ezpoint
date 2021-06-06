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

@Entity("tasks")
class Task {
  @Column()
  id                : string;

  @PrimaryGeneratedColumn()
  id_task     : number;

  @JoinColumn({name:"user_id"})
  @ManyToOne(()=> User)  
  user : User;

  @Column()
  user_id           : number;

  @Column()
  title           : string;

  @Column()
  description           : string;
  
  @Column()
  category           : string;

  @Column()
  status           : string;

  @Column()
  date_hours_final  : Date;
  
  @Column()
  date_hours_end    : Date;
  
  @CreateDateColumn()
  create_at         : Date;

  constructor(){
    if(!this.id)
      this.id = uuid();
  }

}

export {Task}