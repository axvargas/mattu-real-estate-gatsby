import React from 'react'
import Icons from './Icons'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { graphql } from 'gatsby'
import Layout from './Layout'

const Content = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;
    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
`
const SideBar = styled.aside`
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
    .agent {
        margin-top: 4rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #FFF;
    }
    p {
        margin: 0
    }
`
export const query = graphql`
    query($id: String!) {
        allStrapiProperties(filter: { id: { eq: $id } }) {
            nodes {
                id
                name
                description
                wc
                parking
                rooms
                price
                agent {
                    name
                    telephone
                    email
                }
                image {
                    sharp: childImageSharp {
                        fluid ( quality: 100, maxWidth: 1200) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

const Property = ({ data: { allStrapiProperties: { nodes } } }) => {
    const {
        price,
        name,
        description,
        wc,
        rooms,
        parking,
        agent,
        image
    } = nodes[0]
    return (
        <Layout>
            <h1>{name}</h1>
            <Content>
                <main>
                    <Image
                        fluid={image.sharp.fluid}
                    />
                    <p>{description}</p>
                </main>
                <SideBar>
                    <p className="price">$ {price}</p>
                    <Icons
                        wc={wc}
                        parking={parking}
                        rooms={rooms}
                    />
                    <div className="agent">
                        <h2>Agent: </h2>
                        <p>{agent.name}</p>
                        <p>{agent.email}</p>
                        <p>{agent.telephone}</p>
                    </div>

                </SideBar>
            </Content>
        </Layout>
    )
}

export default Property
