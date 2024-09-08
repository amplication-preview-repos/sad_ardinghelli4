import { InputJsonValue } from "../../types";

export type DocumentUpdateInput = {
  identifier?: string | null;
  image?: InputJsonValue;
  pointer?: string | null;
  step?: string | null;
};
