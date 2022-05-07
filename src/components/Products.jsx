import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { ProductsList } from '../data'

const Container = styled.div `
    padding: 20px;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
    return (
        <Container>
            {ProductsList.map((item)=> (<Product item = {item}/>))}
        </Container>
    )
}

export default Products;
