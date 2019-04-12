import React from "react"
import { Create, SimpleForm, TextInput } from "react-admin"

const HotelsCreate = props => (
  <Create resource="hotels" basePath="/hotels" {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="price" />
      <TextInput source="stars" />
      <TextInput source="food" />
      <TextInput source="people" />
      <TextInput source="kids" />
      <TextInput source="description" />
      <TextInput source="country_id" />
    </SimpleForm>
  </Create>
)

export default HotelsCreate