import { prismaClient } from '../prisma'

export class GetLastMessagesService {
  async execute(take: number) {
    const messages = await prismaClient.message.findMany({
      take,
      orderBy: {
        created_at: 'desc',
      },
      include: {
        user: true,
      },
    })

    return messages
  }
}
