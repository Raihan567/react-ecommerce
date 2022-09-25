import React from "react";
import styled from "styled-components";
import Announcement from "../Components/Announcement";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Newsletter from "../Components/Newsletter";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/5xV8mD4/pexels-pixabay-531880.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 40px;
  background-color: #fff;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin: 10px 0;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
`;
const Input = styled.input`
  min-width: 40%;
  flex: 1;
  padding: 8px;
  margin: 20px 10px 0 0;
`;
const Agreement = styled.span`
  font-size: 12px;
  color: gray;
  margin: 10px 0;
`;
const Button = styled.button`
  text-transform: uppercase;
  width: 98%;
  border: none;
  padding: 15px 20px;
  background-color: #ad1919;
  color: white;
  border-radius: 3px;
  margin: 20px 0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1f1d1d;
  }
`;

const Link = styled.a`
  font-size: 12px;
  color: blue;
  text-decoration: underline;
  cursor: pointer;
  margin: 5px 0;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Button>Login</Button>
          <Link src="https://www.google.com/">
            DO NOT YOU REMEMBER THE PASSWORD
          </Link>
          <Link src="https://www.google.com/">CREATE A NEW ACCOUNT </Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
