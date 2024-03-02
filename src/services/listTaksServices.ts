import prismaClient from "../prisma";

export class ListTaskService {
    async execute() {
        const tasks =  await prismaClient.tasks.findMany()

        return tasks
    }
}