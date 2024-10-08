import prisma from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(400);
  }
  try {
    const users = await prisma.user.findMany({});
    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.status(400).end();
  }
}
