import React from "react"
import styled from "styled-components"
import Spacer from "react-spacer"

// const FormStyle = styled.div`
//    {
//     background-color: white;
//     padding: 20px 25% 20px 25%;
//     text-align: center;
//   }
// `

const FormStyle = styled.div``

const ContactForm = () => {
  return (
    <FormStyle>
      <h2 className="title">Get in touch!</h2>
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
          <button type="submit">Send</button>
        </p>
      </form>
    </FormStyle>
  )
}

export default ContactForm
