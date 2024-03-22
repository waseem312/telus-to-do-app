import { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux"
import { nanoid } from "@reduxjs/toolkit"

// features
import { addTodo } from "./todoSlice"
// components
import { Button, TextField, FormContainer } from "../../components"

const AddTodo = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [values, setValues] = useState({
    title: '',
    details: '',
    email: '',
    phone: ''
  })

  const handleAddTodo = () => {
    setValues({ title: '', details: '', email: '', phone: ''})
    console.log(values);
    dispatch(addTodo({
      id: nanoid(8),
      title: values.title,
      details: values.details,
      email:values.email,
      phone:values.phone      
    }))
    navigate('/')
  }

  return (
    <FormContainer title="Add Todo">
      <TextField
        label="Description"
        value={values.title}
        onChange={(e) => setValues({ ...values, title: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Enter Todo Description'}}
      />
      <TextField
        label="Name"
        value={values.details}
        onChange={(e) => setValues({ ...values, details: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Enter Name'}}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Enter Email'}}
      />
      <TextField
        label="Phone number"
        value={values.phone}
        onChange={(e) => setValues({ ...values, phone: e.target.value})}
        inputProps={{ type: 'text', placeholder: 'Enter Phone number'}}
      />
      <Button onClick={handleAddTodo}>Create</Button>
    </FormContainer>
  )
}
export default AddTodo