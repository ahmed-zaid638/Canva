import prisma from "@/lib/prisma";

export default async function useUser(req: any, res: any) {
  const users = await prisma.user.findMany();
  res.json(users);
}
