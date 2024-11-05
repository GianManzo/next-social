import { setCookies } from "@/actions/cookies";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const requestBody = await request.json();

  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: requestBody.username,
      password: requestBody.password,
    }),
  });

  if (!response.ok) {
    return Response.json({ error: "Não autorizado" }, { status: 401 });
  }

  const responseAPI = await response.json();

  await setCookies("token", responseAPI.token);

  return Response.json({
    authorized: true,
    username: requestBody.username,
  });
}
