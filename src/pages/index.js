import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"

import Layout from "../components/layout"

// import { homeQuery } from "./query"

const IndexPage = ({ data }) => {
	const { logo, title, description, createdOn } = data.contentfulHome

	return (
		<Layout pageTitle='Home Page'>
			<img src={logo.file.url} alt='logo' />
			<h1>{title}</h1>
			{renderRichText(description)}
			<p>Created on: {new Date(createdOn).toUTCString()}</p>
		</Layout>
	)
}
export const homeQuery = graphql`
	query {
		contentfulHome {
			title
			description {
				raw
			}
			logo {
				file {
					url
				}
			}
			createdOn(locale: "en-IN")
		}
	}
`

// export const query = homeQuery

export default IndexPage
