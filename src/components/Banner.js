import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'
import styled from '@emotion/styled'

import heroCSS from '../css/hero.module.css'

const BackgroundImageStyled = styled(BackgroundImage)`
    height: 300px;
`

const Banner = () => {
    const { img } = useStaticQuery(graphql`
        query {
            img: file(relativePath: { eq: "encuentra.jpg" }) {
                sharp: childImageSharp {
                    fluid(quality: 100, maxWidth: 1500) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `)

    return (
        <BackgroundImageStyled
            tag='section'
            fluid={img.sharp.fluid}
            fadeIn='soft'
        >
            <div className={heroCSS.bgimage}>
                <h3 className={heroCSS.title}>Find the place of your dreams</h3>
                <p>15 years of experience</p>
            </div>

        </BackgroundImageStyled>
    )
}

export default Banner
