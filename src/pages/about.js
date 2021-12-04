import * as React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { graphql } from "gatsby"

import Layout from "../components/layout"

// import { homeQuery } from "./query"

const IndexPage = ({ data }) => {
	// const { logo, title, description, createdOn } = data.contentfulHome

	return <Layout pageTitle='Home Page'>{JSON.stringify(data)}</Layout>
}
export const homeQuery = graphql`
	query {
		contentfulAbout {
			aboutTitle
			contactUsTitle
			firstNameLabel
			firstNameValidationMessage
			lastNameLabel
			lastNameValidationMessage
			submitButtonLabel
			aboutUs {
				raw
			}
		}
	}
`

// export const query = homeQuery

export default IndexPage
