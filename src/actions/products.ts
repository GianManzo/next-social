"use server";

interface IProduct {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
}

export const listProducts = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(`https://api.origamid.online/produtos`, {
      method: "GET",
      next: {
        tags: ["products"],
      },
    });
    const data = await response.json();
    return data as IProduct[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addProduct = async (product: Omit<IProduct, "id">) => {
  const { descricao, preco, nome, estoque, importado } = product;
  try {
    const response = await fetch(`https://api.origamid.online/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome,
        preco,
        descricao,
        estoque,
        importado,
      }),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
