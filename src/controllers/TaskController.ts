import {  Request, Response } from 'express';
import { TaskService } from '../services/TaskService';

class TaskController {
  async create(req: Request, res : Response){
    const {
        user_id,
        title,
        description,
        category,
        status,
        date_hours_final,
        date_hours_end 
   } = req.body;

   const taskService = new TaskService();

   const task = await taskService.create({
      user_id,
      title,
      description,
      category,
      status,
      date_hours_final,
      date_hours_end 
   });

   return res.json(task);
  }
  async showByTask(req: Request, res : Response){
    const { id } = req.params;
    
    const taskService = new TaskService();

    const list = await taskService.listByTask(parseInt(id));

    console.log(list)
    return res.json(list);
  }
}

export { TaskController }