import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card"

export default function RegisterComponent({
  handleOnRegister,
  newUser,
  setNewUser,
}) 

{
  return (
    <Card className="px-4 my-5 mx-5" style={{
            alignItems: "center",
            width: "80%"}}>
    <Form onSubmit={handleOnRegister} className="px-4 my-5" >
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          placeholder="First name"
          required
          type="text"
          value={newUser.first_name}
          onChange={({ target }) =>
            setNewUser({ ...newUser, first_name: target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          placeholder="Last name"
          required
          type="text"
          value={newUser.last_name}
          onChange={({ target }) =>
            setNewUser({ ...newUser, last_name: target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={newUser.email}
          onChange={({ target }) =>
            setNewUser({ ...newUser, email: target.value })
          }
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={newUser.password}
          onChange={({ target }) =>
            setNewUser({ ...newUser, password: target.value })
          }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          required
          type="password"
          value={newUser.password_confirmation}
          onChange={({ target }) =>
            setNewUser({ ...newUser, password_confirmation: target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="I accept terms and conditions"
        required
        name="terms"
        value={true}
        onChange={({ target }) => setNewUser({ ...newUser, terms: target.checked })}
         />
      </Form.Group>

      <Button variant="outline-dark" type="submit">
        Register
      </Button>
    </Form>
    </Card>
  );
}
