import { TerminalRepository } from "../repository/TerminalRepository"
import { prisma } from "../services/prismaService"

export const makeTerminalRepository = ()=>{
    return new TerminalRepository(prisma)
}