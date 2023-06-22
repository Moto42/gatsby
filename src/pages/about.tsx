import * as React from 'react';

const AboutPage = () : React.Component => {
    return (
        <main>
            <h1>About me</h1>
            <p>Hi there! I'm the proud creator ofthis site, which I built with Gatsby</p>
        </main>
    );
};

export const Head = () : React.Component => <title>About Me</title>

export default AboutPage;