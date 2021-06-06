import { 
  Entity, 
  Column, 
  CreateDateColumn,
  PrimaryGeneratedColumn 
} from 'typeorm';

import { v4 as uuid} from 'uuid';

@Entity("users")
class User  {

  @Column()
  id: string;

  @PrimaryGeneratedColumn()
  user_id : number;

  @Column()
  name : string;

  @Column()
  email : string;

  @Column()
  company: string;

  @Column()
  password : string;
  
  @Column()
  hours_start : Date;

  @Column()
  hours_end : Date;

  @CreateDateColumn()
  create_ad :  Date;

  constructor(){
    if(!this.id)
      this.id=uuid();
  }
}
export {  User  }