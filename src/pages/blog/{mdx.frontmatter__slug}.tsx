import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { PageProps, graphql } from 'gatsby'

const BlogPost:React.FC<PageProps> = ({data,children}) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const Head:React.FC<PageProps> = ({data}) => <Seo title={data.mdx.frontmatter.title}/>

export default BlogPost

export const query = graphql`
  query BlogTemplate ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`
  