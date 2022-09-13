import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 60px;
  margin: 0.5rem 4rem;
`;
const Wrapper = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Language = styled.span``;
const Input = styled.input`
  border: none;
  outline: none;
  padding: 5px;
`;
const Logo = styled.h1`
  font-weight: bold;
  color: #af0171;
`;
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border: 0.5px solid lightgray;
  border-radius: 3px;
`;
const MenuItem = styled.div`
  font -size: 14px;
  margin-left:2rem;
  cursor: pointer;
  &:hover{
    color:blue;
    transition: all 0.5s linear infinite;
    border-bottom: 0.5 solid blue; 
    
    &:after{
      transform: scaleX(1)

    }
  }
  &:after{
    display:block;
    content: '';
    border-bottom: solid 2px blue;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }

`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: "25px" }}></Search>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Sumu's Store.</Logo>
        </Center>
        <Right>
          <MenuItem className="sign-in">SIGN IN</MenuItem>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>
            <Badge badgeContent={1} color="Secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
