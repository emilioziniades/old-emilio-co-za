import React from "react"

import Layout from "../components/layout"
import HeroShort from "../components/heroShort"
import ContactForm from "../components/contactForm"

const ContactPage = () => {
  return (
    <Layout>
      <HeroShort text="write" class="highlighted2" />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
