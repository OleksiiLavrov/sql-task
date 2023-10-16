import { Product } from "../types/types";

export const Products = ({ products }: { products: Product[] }) => {
   return (
      <div>
         <ul>
            {products.length > 0 &&
               products.map((product: Product) => (
                  <li key={`${product.id}-${product.name}`}>{product.name}</li>
               ))}
         </ul>
      </div>
   );
};
