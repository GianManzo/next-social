import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>404 - Não encontramos o que procurava</h1>
      <Link href="/">Volte para o inicio</Link>
    </main>
  );
}
