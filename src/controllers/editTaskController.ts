import { FastifyReply, FastifyRequest } from "fastify";
import { EditTaskService } from "../services/editTaskService";


export class EditTaskController {

    async handle(req: FastifyRequest, res: FastifyReply) {
        const { title, description, done, id } = req.body as { title: string, description: string, done: boolean, id: string }

        const taskService = new EditTaskService()
        const task = await taskService.execute({ title, description, done, id })
        res.send(task)
    }

}