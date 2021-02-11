import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: hsl(209, 23%, 22%);
`;

const P = styled.p`
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.color};
`;

export { HeaderContainer, P };
