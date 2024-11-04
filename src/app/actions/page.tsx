interface IActions {
  id: number;
  simbolo: string;
  atualizada: string;
}

export default async function ActionsPage() {
  const response = await fetch(`https://api.origamid.online/acoes/lua`, {
    next: { revalidate: 5 },
  });
  const data = (await response.json()) as IActions;
  return (
    <main>
      <h1>{data.simbolo}</h1>
      <h2>{data.atualizada}</h2>
    </main>
  );
}
