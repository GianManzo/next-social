"use client";

import { useSession } from "@/hooks/useSession";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function Menu() {
  const { handleLoggout, userLogged, handleLogin, loading } = useSession();
  const params = useParams();

  useEffect(() => {
    handleLogin();
  }, [handleLogin]);

  return (
    <>
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
          <Link href="/products/add">Adicionar Produto</Link>
        </li>
        <li>
          <Link href="/actions">Ações: {params?.action}</Link>
        </li>
        {loading ? (
          <></>
        ) : (
          <li style={{ display: "flex" }}>
            {userLogged?.autorizado ? (
              <>
                {userLogged?.usuario}
                <button type="button" onClick={handleLoggout}>
                  Sair
                </button>
              </>
            ) : (
              <Link href="/login">Entrar</Link>
            )}
          </li>
        )}
      </ul>
    </>
  );
}
