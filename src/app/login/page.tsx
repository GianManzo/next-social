"use client";

import { login } from "@/actions/login";
import { loginAPI } from "@/api/login.api";

export default function LoginPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.username.value;
    const password = e.currentTarget.password.value;
    try {
      // const userLogin = await loginAPI({ username, password }); // with api
      const userLogin = await login({ username, password }); // with server actions
      if (userLogin.authorized) {
        window.location.href = "/";
      } else window.alert("Usuário ou senha inválidos");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" name="username" />

      <label htmlFor="password">Password</label>
      <input id="password" type="password" name="password" />

      <button type="submit">Entrar</button>
    </form>
  );
}
