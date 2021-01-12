import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
  <div style={{ color: `purple`, fontSize: `24px` }}>
    <Link to="/contact/">Contact</Link>
    <h1>Hello Gatsby!</h1>
    <p> What a world</p>
    <img src="https://images.genius.com/fa5447668d0edadf37df8e0c14fc3b96.1000x1000x1.jpg" alt="" />
  </div>
  )
}