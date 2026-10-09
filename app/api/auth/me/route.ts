import { getSession } from "@auth0/nextjs-auth0";

export async function GET() {
  const session = await getSession();

  if (!session) {
    return new Response("Unauthorized", { status: 401 });
  }

  return Response.json(session.user);
}
