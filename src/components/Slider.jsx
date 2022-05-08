import { useState } from "react";
import { ArrowBackOutlined, ArrowForwardOutlined } from "@material-ui/icons";
import styled from "styled-components";
import {SliderItems} from "../data";

const Container = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  position: relative;
  margin-top: 10px;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  cursor: pointer;
  z-index: 1;
`;

const Wrapper = styled.div`
  
  display: flex;
  transform: translateX(${(props)=>props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 60vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bg};
`;

const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 100%;
`;

const Image = styled.img`
  height: 100%;
  width: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 50px;
`;

const Description = styled.p`
  font-size: 30px;
  letter-spacing: 3px;
`;

const Button = styled.button`
  font-size: 20px;
  padding: 5px;
  margin: 5px 0px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);

  let handleClick = (direction) => {
   
    if(direction === "left"){
      setSliderIndex(sliderIndex > 0 ? sliderIndex-1 : 1);
    }else{
      setSliderIndex(sliderIndex < 1 ? sliderIndex+1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackOutlined />
      </Arrow>
      {SliderItems.map((item)=>(
      <Wrapper key = {item.title} sliderIndex = {sliderIndex}>
        <Slide bg = {item.bg}>
          <ImageContainer>
            <Image src = {item.img}/>
          </ImageContainer>
          <InfoContainer>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
            {/*<Button>SHOW NOW</Button>*/}
          </InfoContainer>
        </Slide>
        </Wrapper>
        ))}
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
