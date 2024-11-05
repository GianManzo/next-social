"use server";

import { cookies } from "next/headers";

export const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  try {
    const response = await fetch(`https://api.origamid.online/conta/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();

    const token = await cookies();
    token.set("token", data.token, {
      httpOnly: true,
    });
    return {
      authorized: true,
      username,
    };
  } catch (error) {
    console.log(error);
    return {
      authorized: false,
      username: "",
    };
  }
};
