export type Group = {
   id: number;
   id_parent: number;
   name: string;
   products_amount?: number;
};

export type Product = {
   id: number;
   id_group: number;
   name: string;
};
