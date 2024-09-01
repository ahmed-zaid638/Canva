import prisma from "@/lib/prisma";

export default async function handler(req: any, res: any) {
  const users = await prisma.user.findMany();
  res.json(users);
}
