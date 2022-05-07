import {
  Email,
  Facebook,
  Home,
  Instagram,
  Phone,
  Pinterest,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: white;
`;

const Left = styled.div`
  flex: 1;
  padding: 20px;
`;

const Logo = styled.h1`
  font-size: 30px;
  margin-bottom: 30px;
`;

const Description = styled.p`
  font-size: 15px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
  display: flex;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  color: white;
  margin-right: 10px;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bg};
`;

const Separator = styled.div `
  border-right: 1px solid lightgrey;
 margin: 30px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
   font-size: 30px;
`;

const List = styled.ul `
margin: 20px 0px;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;


const ListItem = styled.li `
width: 100%;
margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  font-size: 15px;
  margin-bottom:10px;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>EKART</Logo>
        <Description>
          Get Unique Styles From Top Brands Like H&M, HRX And More. Shop Your
          Favorite Look Now. Redefine Your Style Statement With Trendy Apparel,
          Footwear, Accessories & More
        </Description>
        <SocialContainer>
          <SocialIcon bg="blue">
            <Facebook />
          </SocialIcon>
          <SocialIcon bg="pink">
            <Instagram />
          </SocialIcon>
          <SocialIcon bg="skyblue">
            <Twitter />
          </SocialIcon>
          <SocialIcon bg="red">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Separator/>
      <Center>
        <Title>Useful Links</Title>
        <List>
            <ListItem>About</ListItem>
            <ListItem>Home</ListItem>
            <ListItem>Category</ListItem>
        </List>
      </Center>
      <Separator/>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Home /> 2, Railway parallel road, Bengaluru - 560020
        </ContactItem>
        <ContactItem>
          <Phone /> +1 25362283
        </ContactItem>
        <ContactItem>
          <Email /> ekart@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
