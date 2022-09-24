import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 1rem 3rem;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 1.2rem;
`;

const Center = styled.div`
  flex: 1;
  padding: 1.2rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 1.2rem;
`;

const Desc = styled.p`
  margin: 1.2rem 0;
`;

const Logo = styled.h1``;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;
  background-color: #e01010;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.1rem;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const SocialContainer = styled.div`
  display: flex;
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  /* display: flex; */

  /* flex-wrap: wrap; */
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 5px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #e01010;
    /* text-decoration: underline; */
    transform: scaleX(1.01);
    font-weight: bold;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>RAI STORE</Logo>
        <Desc>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </Desc>

        <SocialContainer>
          <SocialIcon>
            <LinkedIn />
          </SocialIcon>
          <SocialIcon>
            <Facebook />
          </SocialIcon>
          <SocialIcon>
            <Instagram />
          </SocialIcon>
          <SocialIcon>
            <Twitter />
          </SocialIcon>
          <SocialIcon>
            <Pinterest />
          </SocialIcon>
          <SocialIcon>
            <GitHub />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful links:</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & condition</ListItem>
          <ListItem>Privacy & policy</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          22 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />{" "}
          contact.raihan@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/sVfWJ8J/sslcom.png"></Payment>
      </Right>
    </Container>
  );
};

export default Footer;
