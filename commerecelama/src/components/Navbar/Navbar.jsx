import React from "react";
import { FaSearch } from "react-icons/fa";
import {
  Container,
  Wrapper,
  Right,
  Center,
  Left,
  Language,
  SearchContainer,
  Input,
  Logo,
} from "./Navbar.elements";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <FaSearch size={18} />
          </SearchContainer>
        </Left>
        <Center>Center</Center>
        <Right>
          <Logo>hims</Logo>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
