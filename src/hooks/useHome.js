import { useStaticQuery, graphql } from 'gatsby'

const useHome = () => {

    const { allStrapiPages: { nodes } } = useStaticQuery(graphql`
        query {
            allStrapiPages(filter: { name: { eq: "Home" } }) {
                nodes {
                    id
                    name
                    content
                    image {
                        sharp: childImageSharp {
                            fluid(maxWidth: 1200, quality: 100, duotone: {
                                highlight: "#222222", shadow: "#192550", opacity: 30
                            }) {
                                ...GatsbyImageSharpFluid_withWebp
                            }
                        }
                    }
                }
            }
        }
    `)

    return nodes[0]
    // return nodes.map( item => ({
    //     name: item.name,
    //     content: item.content,
    //     image:  item.image
    // }) )
}

export default useHome
