import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
`;

export const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
export const Center = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
  text-align: right;
`;

export const Language = styled.span`
  cursor: pointer;
  font-size: 14px;
`;

export const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-right: 25px;
  padding: 5px;
`;

export const Input = styled.input`
  border: none;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;
