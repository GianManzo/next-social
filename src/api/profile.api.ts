import { API_LOCAL } from "@/config";
import { cookies } from "next/headers";

export const getUser = async () => {
  const cookiesNext = await cookies();
  const token = cookiesNext.get("token");

  const response = await fetch(`${API_LOCAL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
  });

  return response.json();
};
