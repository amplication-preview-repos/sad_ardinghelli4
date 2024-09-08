import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DocumentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Documents"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <TextField label="image" source="image" />
        <TextField label="pointer" source="pointer" />
        <TextField label="step" source="step" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
