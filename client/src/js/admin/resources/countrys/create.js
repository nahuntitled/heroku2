import React from "react"
import { Create, SimpleForm, TextInput } from "react-admin"

const CountrysCreate = props => (
  <Create resource="countrys" basePath="/countrys" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
    </SimpleForm>
  </Create>
)

export default CountrysCreate