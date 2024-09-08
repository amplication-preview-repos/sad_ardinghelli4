import { Document as TDocument } from "../api/document/Document";

export const DOCUMENT_TITLE_FIELD = "identifier";

export const DocumentTitle = (record: TDocument): string => {
  return record.identifier?.toString() || String(record.id);
};
