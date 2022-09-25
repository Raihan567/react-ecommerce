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
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
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
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: #ad1919;
  color: white;
  border-radius: 3px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #1f1d1d;
  }
`;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create your account</Title>
        <Form>
          <Input placeholder="Your name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="password" />
          <Input placeholder="confirm password" />
          <Agreement>
            By creating an account Processing my personal data in accordance
            with the privacy policy.{" "}
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
