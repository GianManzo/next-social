import { getCookies } from "@/actions/cookies";
import { API_LOCAL } from "@/config";

export const getUser = async () => {
  const token = await getCookies("token");

  const response = await fetch(`${API_LOCAL}/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },
    cache: "no-store",
  });

  return response.json();
};
