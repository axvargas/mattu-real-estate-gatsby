const urlSlug = require('url-slug')

exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query{
            allStrapiPages {
                nodes {
                    id
                    name
                }
            }
            allStrapiProperties {
                nodes {
                    id
                    name
                }
            }
        }
    `)
    // console.log(result.data.allStrapiProperties.nodes)
    // * In case there ain't a result
    if (result.errors) {
        reporter.panic("There aren't results", result.errors)
    }

    // * In case of a result
    const pages = result.data.allStrapiPages.nodes
    const properties = result.data.allStrapiProperties.nodes

    // * Template for pages
    pages.forEach((page) => {
        const slug = urlSlug(page.name)
        actions.createPage({
            path: slug,
            component: require.resolve('./src/components/Page.js'),
            context: {
                id: page.id
            }
        })
    })

    // * Template for properties
    properties.forEach((property) => {
        const slug = urlSlug(property.name)
        actions.createPage({
            path: slug,
            component: require.resolve('./src/components/Property.js'),
            context: {
                id: property.id
            }
        })
    })
}