import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export default function LoginComponent({ handleOnLogin, credentials, setCredentials }) {
  return (
    <Card className="px-4 my-5 mx-5" style={{alignItems:"center"}}>
    <Form className="px-4 my-5" onSubmit={handleOnLogin}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={credentials.email}
          onChange={({ target }) =>
          setCredentials({ ...credentials, email: target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={credentials.password}
          onChange={({ target }) =>
          setCredentials({ ...credentials, password: target.value })
          }
        />
      </Form.Group>
      <Button variant="outline-secondary" type="submit">
        Login
      </Button>
    </Form>
    </Card>
  );
        }