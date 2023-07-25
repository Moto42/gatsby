import * as React from 'react'
import { Link, Page, PageProps, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage:React.FC<PageProps<Queries.BlogIndexQuery>> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map(node => {
          return <article> 
            <h2>
              <Link to={`/blog/${node.frontmatter?.slug}`}>
                {node.frontmatter?.title}
              </Link>
            </h2>
            {node.frontmatter?.date}
          </article>
        })
      }
    </Layout>
  )
}

export const query = graphql`
  query BlogIndex{
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage