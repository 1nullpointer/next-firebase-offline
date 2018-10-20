import React from "react"
import Link from "next/link"

export default ({ pathname }) => (
  <header>
    <Link href="/">
      <a className={pathname === "/" ? "is-active" : ""}>Home</a>
    </Link>{" "}
    {/* <Link href="/about">
      <a className={pathname === "/about" ? "is-active" : ""}>About</a>
    </Link> */}

    <Link href="/test">
      <a className={pathname === "/test" ? "is-active" : ""}>NextFirebaseOfflineTest</a>
    </Link>
  </header>
)
