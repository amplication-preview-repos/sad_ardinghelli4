import { SortOrder } from "../../util/SortOrder";

export type DocumentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  identifier?: SortOrder;
  image?: SortOrder;
  pointer?: SortOrder;
  step?: SortOrder;
  updatedAt?: SortOrder;
};
