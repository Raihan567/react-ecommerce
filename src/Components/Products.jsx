import React from "react";
import styled from "styled-components";
import { popularProducts } from "../pages/data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2rem;

`;
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id}/>
      ))}
    </Container>
  );
};

export default Products;
