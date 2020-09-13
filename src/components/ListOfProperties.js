import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'
import useProperties from '../hooks/useProperties'
import PropertyPreview from './PropertyPreview'
import listofproperties from '../css/listofproperties.module.css'
import useFilter from '../hooks/useFilter'
const ListOfProperties = () => {
    const queryResult = useProperties()
    // eslint-disable-next-line
    const [properties, setProperties] = useState(queryResult)
    const [filteredProperties, setFilteredProperties] = useState([])

    const { category, FilterUI } = useFilter()
    useEffect(() => {
        if (category) {
            const filter = properties.filter(property => property.category.name === category)
            setFilteredProperties(filter)
        } else {
            setFilteredProperties(properties)
        }
        // eslint-disable-next-line
    }, [category])
    return (
        <>
            <h1
                css={css`
                margin-top: 5rem;
            `}
            >
                Our Properties
            </h1>
            {FilterUI()}
            <ul className={listofproperties.properties}>
                {filteredProperties.length !== 0 &&
                    filteredProperties.map((property) => (
                        <PropertyPreview key={property.id} property={property} />
                    ))

                }
            </ul>

        </>
    )
}

export default ListOfProperties
