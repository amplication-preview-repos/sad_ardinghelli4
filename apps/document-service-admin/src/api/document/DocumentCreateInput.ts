import { InputJsonValue } from "../../types";

export type DocumentCreateInput = {
  identifier?: string | null;
  image?: InputJsonValue;
  pointer?: string | null;
  step?: string | null;
};
