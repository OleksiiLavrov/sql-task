import "./styles/App.css";
import { useState } from "react";
import { Group, Product } from "./types/types";
import { Products } from "./components/Products";
import { Groups } from "./components/Groups";
import { baseURL } from "./constants";

function App() {
   const [groups, setGroups] = useState<Group[]>([]);
   const [products, setProducts] = useState<Product[]>([]);

   const getProductsAmountPerGroup = async (groups: Group[]) => {
      const data = await Promise.all(
         groups.map((group: Group) =>
            fetch(`${baseURL}/products/${group.id}`).then((res) => res.json())
         )
      );
      data.map((products: Product[], index: number) => {
         groups[index].products_amount = products.length;
      });

      return groups;
   };

   const handleClick = async (id: number = 0) => {
      const urls = [
         `${baseURL}/groups/${id}`,
         `${baseURL}/products/${id === 0 ? "" : id}`,
      ];
      const [groupsData, productsData] = await Promise.all(
         urls.map((url) => fetch(url).then((res) => res.json()))
      );

      const groupsWithProductsAmount = await getProductsAmountPerGroup(
         groupsData
      );

      setGroups(groupsWithProductsAmount);
      setProducts(productsData);
   };
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "40px",
            width: "100%",
         }}
      >
         <div>
            <a
               href="#"
               onClick={() => {
                  handleClick();
               }}
            >
               Все товары
            </a>
            <Groups groups={groups} handleClick={handleClick} />
         </div>
         <Products products={products} />
      </div>
   );
}

export default App;
