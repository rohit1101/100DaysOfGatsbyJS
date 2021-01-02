import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div style={{ color: "purple" }}>
      <Link to="/contact">Contact</Link>
      <Header from="home" />
      <h1>Hello Gatsby!</h1>
      <p>What a world!</p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="Random info from unsplash"
      />
    </div>
  )
}
