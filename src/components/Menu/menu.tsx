import { getUser } from "@/api/profile.api";

import Link from "next/link";

export default async function Menu() {
  const userLogged = await getUser();

  return (
    <ul className="menu">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/courses">Cursos</Link>
      </li>
      <li>
        <Link href="/products">Produtos</Link>
      </li>
      <li>
        <Link href="/actions">Acões</Link>
      </li>
      <li>
        {userLogged.autorizado ? (
          userLogged.usuario
        ) : (
          <Link href="/login">Entrar</Link>
        )}
      </li>
    </ul>
  );
}
