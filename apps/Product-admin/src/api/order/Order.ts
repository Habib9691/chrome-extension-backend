import { Product } from "../product/Product";

export type Order = {
  createdAt: Date;
  customerId: string | null;
  discount: number | null;
  id: string;
  product?: Product | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
