import { RevalidateButton } from "@/components/RevalidateButton/RevalidateButton";

interface IActions {
  id: number;
  simbolo: string;
  atualizada: string;
  nome: string;
  preco: number;
}

export default async function ActionsPage() {
  const response = await fetch(`https://api.origamid.online/acoes/lua`, {
    next: {
      revalidate: 5,
      tags: ["actions"],
    },
  });
  const data = (await response.json()) as IActions;
  return (
    <main>
      <RevalidateButton />

      <h1>Acoes</h1>
      <h2>{data.nome}</h2>
      <p>preco: {data.preco}</p>
      <p>Atualizada: {data.atualizada}</p>
    </main>
  );
}
