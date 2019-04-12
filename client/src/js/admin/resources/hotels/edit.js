import React from "react"
import { Edit, SimpleForm, TextInput } from "react-admin"

const ProducersEdit = props => (
  <Edit resource="hotels" basePath="/hotels" {...props}>
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
  </Edit>
)

export default ProducersEdit