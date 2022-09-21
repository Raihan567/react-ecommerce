import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 25px;
  background-color: #cd104d;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  text-transform: capitalize;
  font-weight:500;
`;
const Announcement = () => {
  return <Container>Super Deal! Free shopping on Orders over %50</Container>;
};

export default Announcement;
