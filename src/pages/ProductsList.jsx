import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer';
import Products from '../components/Products';

const Container = styled.div `
`;

const Title = styled.h1 `
`;

const FilterContainer = styled.div `
    display: flex;
`;

const Filter = styled.div `
padding: 20px;
`;

const ProductsList = () => {
    return (
        <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>Filter1</Filter>
            <Filter>Filter2</Filter>
        </FilterContainer>
        <Products/>
        <Footer/>
        </Container>
    )
}

export default ProductsList;