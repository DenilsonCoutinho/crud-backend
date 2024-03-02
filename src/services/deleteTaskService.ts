import prismaClient from "../prisma";

interface DeleteTaksProps {
    id: string
}

export class DeleteTaskService {
    async execute({ id }: DeleteTaksProps) {
        if (!id) {
            throw new Error("Exclusão inválida");
        }
        const findTask = await prismaClient.tasks.findFirst({
            where: { id: id }
        })
        if (!findTask) {
            throw new Error("Cliente não existe!");
        }

        await prismaClient.tasks.delete({
            where: { id: findTask.id }
        })
        return {message: 'Deletado com sucesso!'}
    }
}