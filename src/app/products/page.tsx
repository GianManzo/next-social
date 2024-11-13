import { listProductsAction } from "@/actions/products";
import { Suspense } from "react";

export default async function ProductsPage() {
  const products = await listProductsAction();

  return (
    <div>
      <h1>Produtos</h1>
      <Suspense fallback="Carregando...">
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.nome}: R$ {product.preco}
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
