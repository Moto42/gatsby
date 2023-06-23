import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeadFC, graphql } from 'gatsby';

type BlogPageProps = {
    data: Queries.BlogPageQuery;
};

const BlogPage : React.FC<BlogPageProps> = ({data}) => {

    return (
        <Layout pageTitle="My Blog Posts">
            <ul>
            {
                data.allFile.edges.map(node => (
                <li key={node.node.name}>
                    {node.node.name}
                </li>
                ))
            }
            </ul>
        </Layout>
    );
};

export const Head: HeadFC = () => <Seo title="My Blog Posts"></Seo>;

export default BlogPage;

export const query = graphql`
  query BlogPage {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      edges {
        node {
          name
        }
      }
    }
  }
`