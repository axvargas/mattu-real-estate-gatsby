import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

const Form = styled.form`
    width: 100%;
    display: flex;
    margin-top: 2rem;
    border: 1px solid #E1E1E1;
    max-width: 1200px;
    margin: 2rem auto 0 auto;
`
const Select = styled.select`
    flex: 1;
    padding: 1rem;
    /* appearance: none; */
    border: none;
    font-family: 'Lato', sans-serif;
`
const useFilter = () => {

    const [category, setCategory] = useState('')

    const { allStrapiCategories: { nodes } } = useStaticQuery(graphql`
        query {
            allStrapiCategories {
                nodes {
                    id
                    name
                }
            }
        }
    `)

    const FilterUI = () => (
        <Form>
            <Select
                onChange={(e) => {
                    setCategory(e.target.value)
                }}
                value={category}
            >
                <option value="">--Filter by category--</option>
                {nodes &&
                    nodes.map((cat) => (
                        <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))
                }
            </Select>
        </Form>
    )

    return {
        category,
        FilterUI
    }
}

export default useFilter
