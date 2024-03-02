import { FastifyReply, FastifyRequest } from "fastify";
import { DeleteTaskService } from "../services/deleteTaskService";

export class DeleteTaskController {

    async handle(req: FastifyRequest, res: FastifyReply) {

        const taskService = new DeleteTaskService()

        const { id} = req.query as {id: string}

        const task = await taskService.execute({id})

        res.send(task)
    }
}