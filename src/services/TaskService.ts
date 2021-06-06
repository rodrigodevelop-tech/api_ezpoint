import { getCustomRepository, Repository } from "typeorm"
import { Task } from "../entities/Task";
import { TaskRepository } from "../repositories/TaskRepository";

interface ITask {
    user_id: number;
    title : string;
    description : string;
    category : string;
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
        status,
        date_hours_final,
        date_hours_end 
      } :ITask ){


    const task = this.taskRepository.create({
      user_id,
      title,
      description,
      category,
      status,
      date_hours_final,
      date_hours_end 
    });

    await this.taskRepository.save(task); 

    return task;

  }
  async listByTask(user_id: number){
    
    const list = await this.taskRepository.find({
      user_id,
    });
    
    return list;

  }
}

export {  TaskService  }