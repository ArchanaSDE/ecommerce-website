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

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: rgb(208, 224, 226);
    align-items: center;
    margin: 5px;
`;

const ImageContainer = styled.div `
    flex: 1;
    display: flex;
    min-height: 250px;
    min-width: 300px;
    flex:1;
    align-items: center;
    justify-content: center;
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

const Category = styled.p `
    flex: 1;
    font-size: 30px;
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
            <ImageContainer>
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
            </ImageContainer>
            <Category>{item.category}</Category>
        </Container>
    )
}

export default Product
