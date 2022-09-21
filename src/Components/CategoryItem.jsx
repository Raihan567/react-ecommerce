import React from "react";
import styled from "styled-components";
const Container = styled.div`
  flex: 1;
  margin: 13px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: black;
  margin-bottom: 20px;
  filter: drop-shadow(0 0 2rem white);
  text-shadow: 1px 1px 2px black;
  background-color: #fff;
  padding: 0.6rem;
  border-radius: 0.5rem;
`;
const Button = styled.button`
  color: white;
  border:none;
  background-color: #e01010;
  cursor: pointer;
  padding:0.4rem 1rem;
  border-radius:0.3rem;

`;
const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
