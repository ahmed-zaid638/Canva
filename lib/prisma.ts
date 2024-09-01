import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const users = prisma.user.findMany();

export default prisma;

