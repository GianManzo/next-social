import { listProducts } from "@/actions/products";

export default async function ProductsPage() {
  const products = await listProducts();

  return (
    <div>
      <h1>Produtos</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.nome}: R$ {product.preco}
          </li>
        ))}
      </ul>
    </div>
  );
}
