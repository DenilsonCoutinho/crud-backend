import { FastifyReply, FastifyRequest } from "fastify";
import { ListTaskService } from "../services/listTaksServices";


export class ListTasksController {
    async handle(req: FastifyRequest, res: FastifyReply) {

        const listTaskService = new ListTaskService()
        const tasks = await listTaskService.execute()
        
        res.send(tasks)
    }
}