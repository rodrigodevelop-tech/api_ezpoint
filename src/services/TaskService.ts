import { getCustomRepository, Repository } from "typeorm"
import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

interface ITask {
    user_id: number;
    title : string;
    description : string;
    category : string;
    id_category : number;
    status : string;
    date_hours_final : Date;
    date_hours_end : Date;
}

class TaskService {
  private taskRepository : Repository<Task>;

  constructor(){
    this.taskRepository = getCustomRepository(TaskRepository);
  }
  async create({
        user_id,
        title,
        description,
        category,
        id_category,
        status,
        date_hours_final,
        date_hours_end 
      } :ITask ){


    const task = this.taskRepository.create({
      user_id,
      title,
      description,
      category,
      id_category,
      status,
      date_hours_final,
      date_hours_end 
    });
    console.log(task);

    await this.taskRepository.save(task); 

    return task;

  }
  async listByTask(id_category: number,user_id: number){
    
    const list = await this.taskRepository.find({
      where:{
        user_id:user_id,
        id_category:id_category,
      },
    });
    console.log(list);
    
    return list;

  }
  async listByTaskAll(){
    
    const list = await this.taskRepository.find();
    
    console.log(list);
    
    return list;

  }
}

export {  TaskService  }