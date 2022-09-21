import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../pages/data";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #dddeee;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  border-radius: 50%;
  z-index: 2;
  opacity: 0.5;
  &:hover {
    opacity: 1;
    transition: all 0.5s ease-out;
  }
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;
const Slide = styled.div`
  /* width: 100vh; */
  width:100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-color: #${(props) => props.bg};
`;
const ImgContainer = styled.div`
  height: 80%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Image = styled.img`
  height: 100%;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  text-transform: uppercase;
  width: 600px;
`;
const Desc = styled.p`
  font-size: 20px;
  padding: 0.5rem 0;
  letter-spacing: 3px;
  margin: 50px 0;
`;
const Button = styled.button`
  color: #fff;
  background-color: #e01010;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.2rem;
  font-size: 16px;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    background-color: #b61717;
    transition: all 0.3s linear;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <KeyboardArrowLeft />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
        {/* <Slide>
          <ImgContainer>
            <Image src="https://i.ibb.co/R36sQ5B/slider-6.png" />
          </ImgContainer>
          <InfoContainer>
            <Title>Summer sale</Title>
            <Desc>
              DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
            </Desc>
            <Button>SHOW NOW</Button>
          </InfoContainer>
        </Slide> */}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <KeyboardArrowRight />
      </Arrow>
    </Container>
  );
};

export default Slider;
