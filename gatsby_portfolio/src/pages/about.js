import React from 'react'
import Layout from '../components/layout';
import SEO from '../components/seo';
import { Link } from "gatsby"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Me</h1>
    <p>Ipsum dolor commodo ex anim tempor ut proident in voluptate nulla proident enim duis
    sint. Non aliqua tempor amet esse sunt exercitation proident. Mollit incididunt qui
    velit consectetur eiusmod Lorem. In do ipsum exercitation sit sunt sit esse enim mollit
    laboris. Magna labore fugiat sit deserunt sint occaecat in in minim deserunt
      reprehenderit irure.</p>
    <p>Ipsum dolor commodo ex anim tempor ut proident in voluptate nulla proident enim duis
    sint. Non aliqua tempor amet esse sunt exercitation proident. Mollit incididunt qui
    velit consectetur eiusmod Lorem. In do ipsum exercitation sit sunt sit esse enim mollit
    laboris. Magna labore fugiat sit deserunt sint occaecat in in minim deserunt
      reprehenderit irure.</p>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default AboutPage;
