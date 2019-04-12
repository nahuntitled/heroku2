import React from "react"
import { Edit, SimpleForm, TextInput } from "react-admin"

const CountrysEdit = props => (
  <Edit resource="countrys" basePath="/countrys" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
    </SimpleForm>
  </Edit>
)

export default CountrysEdit