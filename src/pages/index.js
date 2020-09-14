import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import BackgroundImage from 'gatsby-background-image'
import useHome from '../hooks/useHome'
import ListOfProperties from '../components/ListOfProperties'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import heroCSS from '../css/hero.module.css'

const BackgroundImageStyled = styled(BackgroundImage)`
	height: 600px;
`
const Index = () => {
	const { name, content, image } = useHome()
	return (
		<Layout>
			<BackgroundImageStyled
				tag='section'
				fluid={image.sharp.fluid}
				fadeIn='soft'
			>
				<div className={heroCSS.bgimage}>
					<h1 className={heroCSS.title}>The most exclusive houses and apartments</h1>
				</div>
			</BackgroundImageStyled>
			<main>
				<h1>{name}</h1>
				<div
					css={css`
						max-width: 800px;
						margin: auto;
					`}
				>
					<p
						css={css`
							text-align: center;
						`}
					>
						{content}
					</p>
				</div>
			</main>
			<Banner />
			<ListOfProperties />

		</Layout>
	)
}

export default Index

