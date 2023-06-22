import * as React from 'react';
import { Link } from "gatsby";

const AboutPage = () : React.Component => {
    return (
        <main>
            <h1>About me</h1>
            <Link to='/'>Back to Home</Link>
            <p>Hi there! I'm the proud creator ofthis site, which I built with Gatsby</p>
        </main>
    );
};

export const Head = () : React.Component => <title>About Me</title>

export default AboutPage;