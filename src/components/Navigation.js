import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;

    @media (min-width: 768px){
        padding-bottom: 0;
        flex-direction: row
    }
`
const NavLink = styled(Link)`
    color: #FFF;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    text-decoration: none;
    padding: .5rem;
    margin-right: 1rem;
    &:last-of-type{
        margin-right:0
    }
    &.actual-page{
        border-bottom: 2px solid #FFF;
    }
`
const Navigation = () => {
    return (
        <Nav>
            <NavLink
                to={'/'}
                activeClassName='actual-page'
            >
                Home
            </NavLink>
            <NavLink
                to={'/properties'}
                activeClassName='actual-page'
            >
                Properties
            </NavLink>
            <NavLink
                to={'/about-us'}
                activeClassName='actual-page'
            >
                About Us
            </NavLink>
        </Nav>
    )
}

export default Navigation
