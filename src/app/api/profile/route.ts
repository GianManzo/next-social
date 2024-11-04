import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const BEARER_TOKEN = request.headers.get("Authorization");

  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: BEARER_TOKEN || "",
    },
  });

  if (!response.ok) {
    return Response.json({ error: "Não autorizado" }, { status: 401 });
  }

  const data = await response.json();

  return Response.json(data);
}
