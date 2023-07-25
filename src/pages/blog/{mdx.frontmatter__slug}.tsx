import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost:React.FC<PageProps<Queries.BlogTemplateQuery>> = ({data,children}) => {
  const image = getImage(data.mdx?.frontmatter?.hero_image )
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{data.mdx?.frontmatter?.date}</p>
      <GatsbyImage 
        image={image}
        alt={data.mdx?.frontmatter?.hero_image_alt}
      />
      <a href={data.mdx.frontmatter?.hreo_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
      </a>
      {children}
    </Layout>
  )
}

export const Head:React.FC<PageProps<Queries.BlogTemplateQuery>> = ({data}) => <Seo title={(data.mdx?.frontmatter?.title||'')}/>

export default BlogPost

export const query = graphql`
  query BlogTemplate($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_text
        hreo_image_credit_link
        hero_image {
          childImageSharp {
            gatsbyImageData(layout:FIXED)
          }
        }
      }
    }
  }
`
  