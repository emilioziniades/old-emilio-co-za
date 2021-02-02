import React from "react"
import styled from "styled-components"

const FormStyle = styled.div`
`
const Form = () => {
return (
    <FormStyle >

    <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="Contact">
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
    <label>
        Name
        <input type="text" name="name" id="name" />
    </label>
    <label>
        Email
        <input type="email" name="email" id="email" />
    </label>
    <button type="submit">Send</button>
</form>
</FormStyle>)
}


export default Form;
