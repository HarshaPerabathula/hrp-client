import React from "react";
import styled from "styled-components";

const Navbar = styled.h1`
  background-color: #ffffff;
  padding: 20px 50px;
  box-shadow: 0px 1px 16px 0px rgb(0 0 0 / 8%), 0px 3px 1px -2px rgb(0 0 0 / 5%),
    0px 6px 16px 0px rgb(0 0 0 / 10%);
  border-radius: 16px;
  text-align: center;
  font-size: 16px;
  position: sticky;
  top: 20px;
`;

const TopNavbar = () => {
  return <Navbar>Harsha Perabathula</Navbar>;
};

export default TopNavbar;
