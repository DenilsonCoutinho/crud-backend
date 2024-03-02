import { FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskService } from "../services/createTaskService";


export class CreateTaskController {
    async handle(req: FastifyRequest, res: FastifyReply) {
        const { title, description } = req.body as { title: string, description: string }


        const taskService = new CreateTaskService()
        const task = await taskService.execute({title,description})

        res.send(task)
    }
}
