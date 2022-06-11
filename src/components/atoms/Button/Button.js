import styled from 'styled-components';

export const Button = styled.button`
  cursor: pointer;
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme: { fontSize } }) => (isBig ? fontSize.m : fontSize.s)};
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);

  border: none;
  border-bottom: 1px solid lightblue;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
