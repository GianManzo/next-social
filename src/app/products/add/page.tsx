"use client";

import { addProduct } from "@/actions/products";
import { redirectAction } from "@/actions/redirect";
import { revalidateTagAction } from "@/actions/revalidate";

export default function AddProducstPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productName = e.currentTarget.productName.value;
    const productPrice = e.currentTarget.productPrice.value;
    const productDescription = e.currentTarget.productDescription.value;
    const productStock = e.currentTarget.productStock.value;
    const productImported = e.currentTarget.productImported.value;

    try {
      const product = await addProduct({
        descricao: productDescription,
        estoque: Number(productStock),
        importado: productImported === "true" ? 1 : 0,
        nome: productName,
        preco: Number(productPrice),
      });

      if (product) {
        revalidateTagAction("products");
        redirectAction("/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="productName">Nome</label>
      <input id="productName" type="text" name="productName" />

      <label htmlFor="productPrice">Preço</label>
      <input id="productPrice" type="number" name="productPrice" />

      <label htmlFor="productDescription">Descricão</label>
      <input id="productDescription" type="text" name="productDescription" />

      <label htmlFor="productStock">Estoque</label>
      <input id="productStock" type="number" name="productStock" />

      <label htmlFor="productImported">
        <input id="productImported" type="checkbox" name="productImported" />
        Importado
      </label>

      <button type="submit">Adicionar</button>
    </form>
  );
}
