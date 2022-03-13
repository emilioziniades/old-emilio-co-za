import React from "react"
import Spacer from "react-spacer"

import { StyledForm } from "./styles"

const ContactForm = () => {
  return (
    <StyledForm>
      <div className="container">
        <h2 className="title">Get in touch!</h2>
        <p>
          Have any questions, want to work together, or just for a chat. Fill
          out the form below and I'll be in touch.{" "}
        </p>
        <Spacer height="15px" />
        <form
          name="Contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netlify="true"
          action="/thanks"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="Contact" />

          <p>
            <label>
              Your Name:
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email:
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message:
              <textarea name="message" />
            </label>
          </p>
          <p>
            <button id="submit" type="submit">
              Submit
            </button>
          </p>
        </form>
      </div>
    </StyledForm>
  )
}

export default ContactForm
