import * as React from 'react';
import type { HeadFC, PageProps} from "gatsby";
import Layout from '../components/layout';

const AboutPage : React.FC<PageProps>= () => {
    return (
        <Layout pageTitle="About me">
            <p>Hi there! I'm the proud creator ofthis site, which I built with Gatsby</p>
        </Layout>
    );
};

export const Head : HeadFC = () => <title>About Me</title>

export default AboutPage;