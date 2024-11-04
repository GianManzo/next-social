import { cookies } from "next/headers";
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
  const cookiesNext = await cookies();

  cookiesNext.set("token", responseAPI.token, {
    httpOnly: true,
  });

  return Response.json({
    authorized: true,
    username: requestBody.username,
  });
}
