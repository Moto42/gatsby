import * as React from "react"
import type { HeadFC, PageProps} from "gatsby";
import { Link } from "gatsby";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
