import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const ListOfIcons = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;
    li {
        display: flex;
        img {
            margin-right: 1rem;
        }
    }

`
const Icons = ({ rooms, wc, parking }) => {
    const { roomEdge, wcEdge, parkingEdge } = useStaticQuery(graphql`
        query {
            roomEdge: allFile(filter: { relativeDirectory: { eq: "icons" }, id: { eq: "b976a6f5-8cf8-5f0d-832b-8dfd8f2451ba" } }) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
            wcEdge: allFile(filter: { relativeDirectory: { eq: "icons" }, id: { eq: "ed0b3cb9-3cfd-545a-b68e-e5508bcde57e" } }) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
            parkingEdge: allFile(filter: { relativeDirectory: { eq: "icons" }, id: { eq: "15b85562-6124-597a-b1c6-ff8764d42e2d" } }) {
                edges {
                    node {
                        id
                        publicURL
                    }
                }
            }
        }
    `)

    const [roomIcon,
        wcIcon,
        parkingIcon
    ] = [roomEdge.edges[0].node.publicURL, wcEdge.edges[0].node.publicURL, parkingEdge.edges[0].node.publicURL];

    return (
        <ListOfIcons>
            <li>
                <img src={roomIcon} alt="room-icon" />
                <p>{rooms}</p>
            </li>
            <li>
                <img src={wcIcon} alt="wc-icon" />
                <p>{wc}</p>
            </li>
            <li>
                <img src={parkingIcon} alt="parking-icon" />
                <p>{parking}</p>
            </li>
        </ListOfIcons>
    )
}

export default Icons
