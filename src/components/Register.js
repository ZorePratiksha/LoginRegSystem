import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post(`${process.env.REACT_APP_API_URL}/register`, data)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.href = '/dashboard';
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" {...register('name')} />
      </Form.Group>
      <Form.Group controlId="formDOB">
        <Form.Label>Date of Birth</Form.Label>
        <Form.Control type="date" {...register('dob')} />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')} />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password')} />
      </Form.Group>
      <Button variant="primary" type="submit">Register</Button>
    </Form>
  );
};

export default Register;
