interface Params {
  id: string;
}

export default async function ProducstPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;
  const response = await fetch(`https://api.origamid.online/produtos/${id}`);
  const data = await response.json();
  console.log(data);

  return (
    <div>
      <h1>{data.nome}</h1>
      <h2>Preço: R$ {data.preco}</h2>
      <p>Descrição: {data.descricao}</p>
    </div>
  );
}
