import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import { HeadFC } from 'gatsby';

const BlogPage : React.FC = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>My cool posts will go in here.</p>
        </Layout>
    );
};

export const Head: HeadFC = () => <Seo title="My Blog Posts"></Seo>;

export default BlogPage;
