import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <>
      Hello world!
      <p>
        <Link to="/blog">View Blog</Link>
      </p>
    </>
  )
}
