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
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1 `
font-size: 24px;
font-weight: bold;
`;

const Form = styled.form `
display: flex;
flex-direction: column;
`;

const Input = styled.input `
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const CreateButton = styled.button `
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #df256c;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a `
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN IN</Title>
                    <Form>
                        <Input placeholder="User Name"/>
                        <Input placeholder="Password"/>
                        <CreateButton>LOGIN</CreateButton>
                        <Link>FORGOT PASSWORD</Link>
                        <Link onClick = {()=>{window.location.href = "http://localhost:3000/register"}}>CREATE A NEW ACCOUNT</Link>
                    </Form>
            </Wrapper>
        </Container>
    )
}

export default Login;
