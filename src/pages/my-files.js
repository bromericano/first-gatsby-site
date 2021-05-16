import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function MyFiles({ data }) {
  console.log(data)
  return (
    <Layout>
      <div>
          <h1>My File Data</h1>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Absolute Path</th>
                      <th>Size</th>
                  </tr>
              </thead>
              <tbody>
                  {data.allFile.edges.map(({ node }, index) => {
                    return (<tr key={index}>
                        <td>{node.id}</td>
                        <td>{node.name}</td>
                        <td>{node.absolutePath}</td>
                        <td>{node.size}</td>
                    </tr>)
                  })}
              </tbody>
          </table>
      </div>
    </Layout>
  )
}

export const query = graphql`
 query MyQuery {
    allFile {
      edges {
        node {
          id
          name
          absolutePath
          size
        }
      }
    }
  }
`
  