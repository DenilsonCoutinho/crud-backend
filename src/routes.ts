import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateTaskController } from "./controllers/createTaskController";
import { ListTasksController } from "./controllers/listTaskController";
import { DeleteTaskController } from "./controllers/deleteTaskController";
import { EditTaskController } from "./controllers/editTaskController";


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    
    fastify.get("/getTasks", async (req: FastifyRequest, res: FastifyReply) => {
        return new ListTasksController().handle(req, res)
    })


    fastify.post("/createTask", async (req: FastifyRequest, res: FastifyReply) => {
        return new CreateTaskController().handle(req, res)
    })

    fastify.put("/editTaks", async (req: FastifyRequest, res: FastifyReply) => {
        return new EditTaskController().handle(req, res)
    })

    fastify.delete("/deleteTaks", async (req: FastifyRequest, res: FastifyReply) => {
        return new DeleteTaskController().handle(req, res)
    })


}