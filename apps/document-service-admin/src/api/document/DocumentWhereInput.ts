import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type DocumentWhereInput = {
  id?: StringFilter;
  identifier?: StringNullableFilter;
  image?: JsonFilter;
  pointer?: StringNullableFilter;
  step?: StringNullableFilter;
};
