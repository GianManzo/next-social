import { RevalidateButton } from "@/components/RevalidateButton/RevalidateButton";

interface ActionProps {
  action: string;
}

export default async function ActionPage({
  params,
}: {
  params: Promise<ActionProps>;
}) {
  const { action } = await params;

  const response = await fetch(`https://api.origamid.online/acoes/${action}`, {
    next: {
      revalidate: 5,
      tags: ["actions"],
    },
  });
  const data = await response.json();
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
