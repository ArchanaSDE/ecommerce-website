import styled from "styled-components"

const Container = styled.div `
height: 30px;
background-color: #df256c;
color: white;
display: flex;
font-size: 14px;
align-items: center;
justify-content: center;
font-weight: 500;
`

const Announcement = () => {
    return (
        <Container>
            Super Deal! Free Shipping on First Three Orders, Hurry UP!
        </Container>
    )
}

export default Announcement;
