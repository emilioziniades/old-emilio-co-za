import React from "react"

import { StyledForm } from "./styles"

import Row from "react-bootstrap/Row"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const ContactForm = () => {
  return (
    <Row className="justify-content-center">
      <StyledForm
        name="Contact"
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        action="/thanks"
      >
        <h2 className="title">Get in touch!</h2>
        <p>
          Have any questions, want to work together, or just for a chat. Fill
          out the form below and I'll be in touch.{" "}
        </p>
        <Form.Control type="hidden" name="bot-field" />
        <Form.Control type="hidden" name="form-name" value="Contact" />

        <Form.Group className="mb-3">
          <Form.Label> Your name: </Form.Label>
          <Form.Control type="text" name="name " placeholder="Enter name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Your email: </Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label> Message: </Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            placeholder="Enter message"
          />
        </Form.Group>
        <Button type="submit" className="mb-3">
          Submit
        </Button>
      </StyledForm>
    </Row>
  )
}

export default ContactForm
