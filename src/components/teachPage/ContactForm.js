import React from 'react'
import styled from "styled-components"
import Spacer from "react-spacer"

const FormStyle = styled.div`
{
    background-color: white;
    padding: 20px 25% 20px 25%;
    text-align: center;
}`

const FormLayout = styled.div`
.title {
    text-align: center;
}
.form-style {
    padding: 40px 50px 40px 50px;
    text-align: center;
}
button{
	border: none;
	padding: 8px 15px 8px 15px;
	background: #FF8500;
	color: #fff;
	box-shadow: 1px 1px 4px #DADADA;
	-moz-box-shadow: 1px 1px 4px #DADADA;
	-webkit-box-shadow: 1px 1px 4px #DADADA;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
}
textarea{

}
label {
    margin: 0px;

}
.messagebox {
    margin: 20px;
    box-shadow: 0 0 5px #BA5C12;
	padding: 3%;
	border: 1px solid #BA5C12;
}
.messagebox {

}
.otherbox {
    margin: 20px;
    box-shadow: 0 0 5px #BA5C12;
	padding: 3%;
	border: 1px solid #BA5C12;
}
`
  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
      })
        .then(() => alert("Success!"))
        .catch(error => alert(error));

      e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
      const { name, email, message } = this.state;
      return (
        <form  
        name="Contact" 
        method="post" 
        netlify-honeypot="bot-field" 
        data-netlify="true"
        action="/teachPage/thanks"
        onSubmit={this.handleSubmit}>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />

          <p><h2 class="title">Interested? Get in touch! </h2>
          <Spacer height="15px" />
            <label>
              Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message" value={message} onChange={this.handleChange} />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      );
    }
  }
