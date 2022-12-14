import React from "react";
import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Products from "../Components/Products";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";

const Container = styled.div`
  `;

const Title = styled.h1`
  margin-left: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin: 20px;
`;
const Option = styled.option``;

const ProductList = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dress</Title>
     
      <FilterContainer>
        <Filter>
          <FilterText>Filter products</FilterText>
          <Select>
        <Option disabled selected>
          Color
        </Option>

        <Option>White</Option>
        <Option>Black</Option>
        <Option>Red</Option>
        <Option>Blue</Option>
        <Option>Yellow</Option>
        <Option>Green</Option>
      </Select>
      <Select>
        <Option disabled selected>
          Size
        </Option>
        <Option>XS</Option>
        <Option>S</Option>
        <Option>M</Option>
        <Option>L</Option>
        <Option>XL</Option>
      </Select>
        </Filter>
        <Filter>
          <FilterText>Sort products</FilterText>
          <Select>
            <Option selected>Newest</Option>
            <Option>Price (ase)</Option>
            <Option>Pice (Desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
