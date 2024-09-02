import prisma from "@/lib/prisma";

export async function GET(req: Request) {
  const users = await prisma.user.findMany({});
  console.log(users);
  // Respond with JSON
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
