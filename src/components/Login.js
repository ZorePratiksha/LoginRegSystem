import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    axios.post(`${process.env.REACT_APP_API_URL}/login`, data)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data));
        window.location.href = '/dashboard';
      })
      .catch(error => console.error(error));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" {...register('email')} />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" {...register('password')} />
      </Form.Group>
      <Button variant="primary" type="submit">Login</Button>
    </Form>
  );
};

export default Login;
