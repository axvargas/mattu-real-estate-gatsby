import React from 'react'
import Icons from './Icons'
import styled from '@emotion/styled'
import Image from 'gatsby-image'
import { Link } from 'gatsby'
import urlSlug from 'url-slug'

const Button = styled(Link)`
    background-color: #0D283B;
    margin-top: 2rem;
    padding: 1rem;
    width: 100%;
    color: #FFF;
    text-decoration: none;
    display: block;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
`
const Card = styled.div`
    border: 1px solid #E1E1E1;
    img {
        max-width: 100%;
    }
`

const Content = styled.div`
    padding: 2rem;
    h3 {
        font-family: 'Lato', sans-serif;
        margin: 0 0 2rem 0;
        font-size: 2.4rem;
    }
    .price {
        font-size: 2rem;
        color: #75AB00;
    }
`
const PropertyPreview = ({ property }) => {
    const { name,
        price,
        wc,
        image,
        rooms,
        parking
    } = property
    return (
        <Card>
            <Image
                fluid={image.sharp.fluid}
            />
            <Content>
                <h3>{name}</h3>
                <p className="price">${price}</p>
                <Icons
                    rooms={rooms}
                    wc={wc}
                    parking={parking}
                />
                <Button to={`/${urlSlug(name)}`}>
                    Visit property
                </Button>
            </Content>
        </Card>

    )
}

export default PropertyPreview
