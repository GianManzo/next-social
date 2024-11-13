"use server";

import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export interface IProduct {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  estoque: number;
  importado: 0 | 1;
}

const validateName = (name: unknown) => {
  return typeof name === "string" && name.length > 1;
};

const validatePrice = (price: unknown) => {
  return typeof price === "number" && price > 1;
};

export const listProductsAction = async (): Promise<IProduct[]> => {
  try {
    const response = await fetch(`https://api.origamid.online/produtos`, {
      next: {
        tags: ["products"],
        revalidate: 5,
      },
    });

    if (!response.ok) throw new Error("Erro na api");
    const data = await response.json();
    return data as IProduct[];
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const addProductAction = async (
  state: { errors: string[] },
  formData: FormData
) => {
  const product: Omit<IProduct, "id"> = {
    nome: formData.get("productName") as string,
    descricao: formData.get("productDescription") as string,
    preco: Number(formData.get("productPrice")),
    estoque: Number(formData.get("productStock")),
    importado: formData.get("productImported") === "true" ? 1 : 0,
  };
  const errors = [];
  if (!validateName(product.nome)) errors.push("Nome inválido");
  if (!validatePrice(product.preco)) errors.push("Preco inválido");
  if (errors.length > 0) return { errors };
  try {
    const response = await fetch(`https://api.origamid.online/produtos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) throw new Error("Erro ao adicionar produto");
  } catch (error: unknown) {
    if (error instanceof Error)
      return {
        errors: [error.message],
      };
  } finally {
    revalidateTag("products");
    redirect("/products");
  }
};
