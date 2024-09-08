import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const DocumentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="identifier" source="identifier" />
        <div />
        <TextInput label="pointer" source="pointer" />
        <TextInput label="step" source="step" />
      </SimpleForm>
    </Edit>
  );
};
