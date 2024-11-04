import { API_LOCAL } from "@/config";

interface ILogin {
  username: string;
  password: string;
}

interface ILoginResponse {
  authorized: boolean;
  username: string;
}

export const loginAPI = async (data: ILogin): Promise<ILoginResponse> => {
  const response = await fetch(`${API_LOCAL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
