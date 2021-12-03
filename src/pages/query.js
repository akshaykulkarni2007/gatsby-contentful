import { graphql } from "gatsby"

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
