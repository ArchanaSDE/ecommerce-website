import { FavoriteBorder, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'

const Info = styled.div `
    align-items: center;
    justify-content: center;
    display: flex;
    z-index: 3;
    opacity: 0;
`;

const Container = styled.div `
    display: flex;
    margin: 5px;
    min-height: 280px;
    min-width: 300px;
    flex:1;
    align-items: center;
    justify-content: center;
    background-color: rgb(208, 224, 226);
    position: relative;
    &:hover ${Info}{
        opacity:1;
    }
`;

const Image = styled.img `
    height: 200px;
    width: 200px;
    align-items: center;
    z-index:2;
    position: absolute;
`;

const Icon = styled.div `
    height: 30px;
    width: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background-color: white;
    border-radius: 50%;
    transition: all 0.5s ease;
    &:hover{
        background-color: lightgrey;
        transform: scale(1.1);
    }
`;

const Product = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
                <Icon>
                    <Search/>
                </Icon>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
