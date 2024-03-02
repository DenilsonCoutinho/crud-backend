import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskController } from "./controllers/createTaskController";
import { ListTasksController } from "./controllers/listTaskController";
import { DeleteTaskController } from "./controllers/deleteTaskController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/', async (req: FastifyRequest, res: FastifyReply) => {
        return {
            ok: true
        }
    })

    fastify.post("/createTask", async (req: FastifyRequest, res: FastifyReply) =>{
       return new CreateTaskController().handle(req, res)
    })

    fastify.get("/getTasks", async (req: FastifyRequest, res: FastifyReply) =>{
        return new ListTasksController().handle(req, res)
     })

     fastify.delete("/deleteTaks", async (req: FastifyRequest, res: FastifyReply) =>{
        return new DeleteTaskController().handle(req, res)
     })
}