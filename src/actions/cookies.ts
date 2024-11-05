"use server";

import { cookies } from "next/headers";

export const setCookies = async (key: string, value: string) => {
  const token = await cookies();
  token.set(key, value, {
    httpOnly: true,
  });
};

export const getCookies = async (key: string) => {
  const token = await cookies();
  return token.get(key);
};

export const deleteCookies = async (key: string) => {
  const token = await cookies();
  token.delete(key);
};
