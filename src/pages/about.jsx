import React from "react"
import Container from "../components/container"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

const About = ({ data }) => {
  return (
    <Container>
      <div>
        <h1>About {data.site.siteMetadata.title}</h1>
        <p>
          I’m good enough, I’m smart enough, and gosh darn it, people like me!
        </p>
      </div>
    </Container>
  )
}

export default About
