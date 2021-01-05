import { Link } from "gatsby"
import React from "react"
import containerStyles from "./container.module.css"

const Container = ({ children }) => (
  <div className={containerStyles.container}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <Link to="/"> My Sweet Site</Link>
      </div>

      <div>
        <Link to="/about" style={{ margin: "0 12px" }}>
          About
        </Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>

    {children}
  </div>
)

export default Container
