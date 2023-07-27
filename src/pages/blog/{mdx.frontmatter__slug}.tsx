import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { PageProps, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BlogPost:React.FC<PageProps> = ({data,children}) => {
  
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      SITE
    </Layout>
  )
}

export const Head:React.FC<PageProps> = ({data}) => <Seo title="post"/>

export default BlogPost


  