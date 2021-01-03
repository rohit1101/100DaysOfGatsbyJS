import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Container from "../components/container"

const Contact = () => (
  <div>
    <Container>
      <Link to="/">Home</Link>
      <h1>Contact Page!</h1>
      <Header from="contact" />
    </Container>
  </div>
)

export default Contact
