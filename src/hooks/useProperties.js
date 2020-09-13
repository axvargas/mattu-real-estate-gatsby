import { useStaticQuery, graphql } from 'gatsby'

const useProperties = () => {

    const { allStrapiProperties: { nodes } } = useStaticQuery(graphql`
        query {
            allStrapiProperties {
                nodes {
                    id
                    name
                    description
                    parking
                    price
                    rooms
                    wc
                    category {
                        name
                    }
                    agent {
                        id
                        name
                        email
                        telephone
                    }
                    image {
                        sharp: childImageSharp {
                            fluid( quality: 100, maxWidth: 600, maxHeight: 400) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)

    return nodes
}

export default useProperties
