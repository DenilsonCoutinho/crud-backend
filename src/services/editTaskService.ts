import fastify, { FastifyReply, FastifyRequest } from "fastify";
import prismaClient from "../prisma";

interface EditaskProps {
    title: string
    description: string
    id: string
    done: boolean
}

export class EditTaskService {
    async execute({ title, description, id, done }: EditaskProps) {
        if (!id) {
            throw new Error("Não foi possível editar");
        }

        const findTask = await prismaClient.tasks.findFirst({
            where: { id: id }
        })

        if (!findTask) {
            throw new Error("Cliente não existe!");
        }
        const task = await prismaClient.tasks.update({
            where: { id },
            data: {
                description,
                title,
                done
            }
        })
        return { task}
    }
}