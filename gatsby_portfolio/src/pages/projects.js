import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const Projects = ({ data }) => (
  <Layout>
    <div>
      <h1>Latest Projects</h1>
      {data.allMarkdownRemark.edges.map(project => (
        <div key={project.node.id}>
          <h3>{project.node.frontmatter.title}</h3>
          <small>{project.node.frontmatter.date}</small>
          <br />
          <br />
          <Link to={project.node.frontmatter.path}>Read More</Link>
          <br />
          <br />
          <hr />
        </div>
      ))}
    </div>
  </Layout>
);

export const projectQuery = graphql`
query ProjectIndexQuery {
  allMarkdownRemark {
    edges {
      node {
        id
        frontmatter {
          path
          date
          title
        }
      }
    }
  }
}`

export default Projects;