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
            roomEdge: file(relativePath: { eq: "icons/icono_dormitorio.svg" }) {
                publicURL
            }
            wcEdge: file(relativePath: { eq: "icons/icono_wc.svg" }) {
                publicURL
            }
            parkingEdge: file(relativePath: { eq: "icons/icono_estacionamiento.svg" }) {
                publicURL
            }
        }
    `)

    const [roomIcon,
        wcIcon,
        parkingIcon
    ] = [roomEdge.publicURL, wcEdge.publicURL, parkingEdge.publicURL];

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
