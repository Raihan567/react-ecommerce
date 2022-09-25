import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 50px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 10px;
  margin-top: 20px;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  margin: 0 10px;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Info = styled.div`
  flex: 3;
`;
const Summery = styled.div`
  flex: 1;
  background-color: #f5eeee;
  text-align: center;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 1%;
  height: 50vh;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  margin-left: 50px;
  width: 200px;
`;
const Details = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
`;
const ProductSize = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const PriceDetail = styled.div`
  flex: 1;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
`;
const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
`;
const Hr = styled.hr`
  background-color: #fffefe;
  border: none;
  height: 1px;
  padding: 10px 0;
`;

const SummeryTitle = styled.h2`
  font-weight: 200;
`;
const SummeryItem = styled.div`
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
`;
const SummeryItemText = styled.span``;
const SummerItemPrice = styled.span``;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: white;
  border-radius: 3px;
  font-weight: 600;
  margin-top: 20rem;


`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping bag (2)</TopText>
            <TopText>You wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/L1Xkkv0/Douglas-Calfskin-Buckle-Belt-1024x1024.jpg" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product:</b> JESSIE THUNDER SHOE{" "}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 234233424
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>27.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr></Hr>
            <Product>
              <ProductDetail>
                <Image src="https://i.ibb.co/xYbRSfK/Slim-Fit-Cotton-Poplin-Shirt-1024x.jpg" />
                <Details>
                  <ProductName>
                    {" "}
                    <b>Product:</b> Hakura Formal Shirt{" "}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 2342334532
                  </ProductId>
                  <ProductColor color="#eee" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$ 35</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summery>
            <SummeryTitle> Oder Summery</SummeryTitle>
            <SummeryItem>
              <SummeryItemText>Subtotal</SummeryItemText>
              <SummerItemPrice>$ 65</SummerItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Estimated Shipping</SummeryItemText>
              <SummerItemPrice>$ 5.90</SummerItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText>Shipping Discount</SummeryItemText>
              <SummerItemPrice>$ -5.90</SummerItemPrice>
            </SummeryItem>
            <SummeryItem>
              <SummeryItemText type="total">Total</SummeryItemText>
              <SummerItemPrice>$ 80</SummerItemPrice>
            </SummeryItem>
            <Button>Checkout Now</Button>
          </Summery>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
