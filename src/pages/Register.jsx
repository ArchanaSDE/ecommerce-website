import React from 'react'
import styled from 'styled-components'

const Container = styled.div `
width: 100vw;
height: 100vh;
background-color: #f7e4e7;
display: flex;
align-items:center;
justify-content:center;
`;

const Wrapper = styled.div `
width:40%;
background-color:white;
padding: 20px;
`;

const Title = styled.h1 `
font-size: 24px;
font-weight: bold;
`;

const Form = styled.form `
display: flex;
flex-wrap:wrap;
`;

const Input = styled.input `
    flex:1;
    min-width:40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`;

const Agreement = styled.p `
font-size: 15px;
margin-top: 20px;
`;

const CreateButton = styled.button `
width: 40%;
padding: 20px 15px;
margin: 10px 0px;
border: none;
background-color:#df256c;
color: white;
letter-spacing: 3px;
cursor: pointer; 
font-weight: bold;
`;

const Register = () => {
    const handleSubmit = (event)=>{
        event.preventDefault();
        window.location.href = "https://archanasde.github.io/ecommerce-website/";
    }

    return (
        <Container>
            <Wrapper>
                <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                        <Input placeholder="First Name"/>
                        <Input placeholder="Last Name"/>
                        <Input placeholder="Phone No"/>
                        <Input placeholder="Email Id"/>
                        <Input placeholder="Password"/>
                        <Input placeholder="Confirm Password"/>
                        <Agreement>
                        By creating an account, I consent to the processing of my personal
                        data in accordance with the <span style= {{color:"#df256c", fontWeight: "bold"}}>PRIVACY POLICY</span>
                        </Agreement>
                        <CreateButton onClick = {e=>handleSubmit(e)}>CREATE</CreateButton>
                    </Form>
            </Wrapper>
        </Container>
    )
}

export default Register;
