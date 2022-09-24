import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 0 3rem;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 3.5rem;
`;

const Image = styled.img`
  width: 82%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 1.2rem 0;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: 300;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 60%; */
  margin: 30px 0;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterTitle = styled.span`
  font-size: 18px;
  font-weight: 300;
  margin-right: 5px;
`;
const FilterColor = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0 5px;
  cursor: pointer;
`;
const FilterSize = styled.select`
  padding: 5px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* width: 50%; */
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  height: 30px;
  width: 30px;
  border-radius: 20%;
  border: 1px solid #e01010;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  /* background-color: #fff; */
  /* border: 1px solid #e01010; */
  background-color: #e01010;
  color: #fff;
  border: none;

  cursor: pointer;
`;
const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/rtFfnjj/200774756-1-midblue.jpg" />
        </ImgContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            autem nostrum sequi! Sed nihil molestias itaque inventore magni quis
            adipisci.
          </Desc>
          <Price>$20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="red" />
              <FilterColor color="orange" />
              <FilterColor color="pink" />
            </Filter>

            <Filter>
              <FilterTitle>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption selected disabled>
                    Select Size
                  </FilterSizeOption>
                  <FilterSizeOption>XS</FilterSizeOption>
                  <FilterSizeOption>S</FilterSizeOption>
                  <FilterSizeOption>M</FilterSizeOption>
                  <FilterSizeOption>L</FilterSizeOption>
                  <FilterSizeOption>XL</FilterSizeOption>
                </FilterSize>
              </FilterTitle>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>Add to cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
