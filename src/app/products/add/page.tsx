"use client";

import { addProductAction } from "@/actions/products";
import { ButtonForm } from "@/components/ButtonForm/ButtonForm";
import { useActionState } from "react";

export default function AddProducstPage() {
  const [state, formActions] = useActionState(addProductAction, {
    errors: [],
  });

  console.log(state, "state");

  return (
    <form action={formActions}>
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
      {state.errors.map((error, i) => (
        <p style={{ color: "red" }} key={i}>
          {error}
        </p>
      ))}
      <ButtonForm />
    </form>
  );
}
