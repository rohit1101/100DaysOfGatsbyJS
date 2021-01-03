import React from "react"
import Header from "../components/Header"
import { Link } from "gatsby"
import Container from "../components/container"
import userStyles from "./about.module.css"
import User from "../components/user"

const About = () => {
  return (
    <div>
      <Container>
        <Link to="/">Home</Link>
        <Header from="about" />
        <h1>About Gatsby</h1>
        <p>Such Wow. Very React.</p>
        <User
          userStyles={userStyles}
          userName="Jane Doe"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
          excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <User
          userStyles={userStyles}
          userName="Bob Smith"
          avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
          excerpt="I'm Bob Smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
      </Container>
    </div>
  )
}

export default About
