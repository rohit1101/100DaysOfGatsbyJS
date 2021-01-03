import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Container from "../components/container"

export default function Home() {
  return (
    <Container>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Header from="home" />
      <h1>Hello Gatsby!</h1>
      <p>What a world!</p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="Random info from unsplash"
      />
    </Container>
  )
}
