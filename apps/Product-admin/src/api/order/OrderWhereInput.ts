import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type OrderWhereInput = {
  customerId?: StringNullableFilter;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  quantity?: IntNullableFilter;
  totalPrice?: IntNullableFilter;
};
