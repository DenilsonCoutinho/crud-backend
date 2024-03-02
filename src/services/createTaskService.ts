import prismaClient from "../prisma";

interface CreateTaskProps {
    title: string;
    description: string;
}

class CreateTaskService {
    async execute({ title, description }: CreateTaskProps) {

        const task = await prismaClient.tasks.create({
            data: {
                title,
                description,
                done: false,
            }
        })
        return {task}
    }
}
export { CreateTaskService }