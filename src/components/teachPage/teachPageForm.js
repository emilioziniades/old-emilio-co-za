import React from "react"
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
export default  extends React.Component  {
return (
    <FormLayout>
    <FormStyle >
    <h2 class="title">Interested? Get in touch! </h2>
    <Spacer height="15px" />
    <form 
        name="Contact" 
        method="post" 
        netlify-honeypot="bot-field" 
        data-netlify="true"
        action="/teachPage/thanks"
        onSubmit={this.handleSubmit}>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
    <label>
        What's your name?
        <br/>
        <input required={true} class='otherbox'type="text" name="name" id="name" />
    </label>
    <br />
    <label>
        Where should I contact you?
        <br/>
        <input class='otherbox' type="email" name="email" id="email" required />
    </label>
    <br />
    <label>
        How can I help you?
        <br/>
        <textarea class="messagebox" name="message" id="message" rows='4' cols='30'/>
    </label>
    <br />
    <button type="Submit">Submit</button>
</form>
</FormStyle>
</FormLayout>
)
}


export default Form;
