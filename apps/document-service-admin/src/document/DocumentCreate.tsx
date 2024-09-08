import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DocumentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="identifier" source="identifier" />
        <div />
        <TextInput label="pointer" source="pointer" />
        <TextInput label="step" source="step" />
      </SimpleForm>
    </Create>
  );
};
