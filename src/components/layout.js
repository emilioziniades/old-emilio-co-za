import React from "react"
import { Link } from "gatsby"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem`, textDecoration: `none` }}>
    <Link to={props.to} >{props.children}</Link>
  </li>
)

export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h1 style={{ display: `inline` }}>Emilio Ziniades</h1>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/tutors/">Tutors</ListLink>
          <ListLink to="/writes/">Writes</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}