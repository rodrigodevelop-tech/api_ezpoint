import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository";
import  bcrypt from 'bcrypt' ;
import jwt from 'jsonwebtoken';

interface IuserService {
    name : string,
    company : string,
    email : string,
    password : string,
    hours_start : Date,
    hours_end : Date
}

interface ILogin {
  email : string,
  password : string,
}

class UserService {
  async login({email,password}: ILogin){
    const usersRepository = getCustomRepository(UserRepository);

    const userLoginAlreadyExists = await usersRepository.find({
      where: {
        email
      }
    });
    if(userLoginAlreadyExists){
        if(await bcrypt.compare(password,userLoginAlreadyExists[0].password)){
          
          const token = jwt.sign({ id: userLoginAlreadyExists[0].user_id},process.env.APP_SECRET,{
            expiresIn: '6d'
          });

          const data = {
            user_id :userLoginAlreadyExists[0].user_id,
            name    : userLoginAlreadyExists[0].name,
            email   : userLoginAlreadyExists[0].email,
            token
          }

          return data;

        }else{
          throw new Error('Password Incorrect');
        }
    }else{
      throw new Error('User not exists');
    }

  }
  async create({name,company,email,password,hours_start,hours_end }: IuserService){
      const usersRepository = getCustomRepository(UserRepository);

      const userAlreadyExists = await usersRepository.findOne({name});

      if(userAlreadyExists){
        throw new Error('User already exists');
      }
        
      const users = usersRepository.create({
        name,
        company,
        email,
        password,
        hours_start,
        hours_end
      });

      await usersRepository.save(users);

      return users;
  }
}

export { UserService}