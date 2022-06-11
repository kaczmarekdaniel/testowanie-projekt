import styled from 'styled-components';

export const Input = styled.input`
  padding: 10px 12px;
  border: none;

  border-bottom: 1px solid ${({ theme }) => theme.colors.darkPurple};
  box-sizing: border-box;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  font-size: ${({ theme }) => theme.fontSize.l};
  resize: none;
  &:focus {
    outline: none;
  }
`;
