"use client";

import { addProductAction, IProduct } from "@/actions/products";
import { redirectAction } from "@/actions/redirect";
import { revalidateTagAction } from "@/actions/revalidate";

export default function AddProducstPage() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const productData: Omit<IProduct, "id"> = {
      nome: e.currentTarget.productName.value,
      preco: Number(e.currentTarget.productPrice.value),
      descricao: e.currentTarget.productDescription.value,
      estoque: Number(e.currentTarget.productStock.value),
      importado: e.currentTarget.productImported.value === "true" ? 1 : 0,
    };

    try {
      const product = await addProductAction(productData);

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
