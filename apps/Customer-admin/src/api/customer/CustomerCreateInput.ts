import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type CustomerCreateInput = {
  address?: AddressWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: InputJsonValue;
  phone?: string | null;
};
