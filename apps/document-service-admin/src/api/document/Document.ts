import { JsonValue } from "type-fest";

export type Document = {
  createdAt: Date;
  id: string;
  identifier: string | null;
  image: JsonValue;
  pointer: string | null;
  step: string | null;
  updatedAt: Date;
};
