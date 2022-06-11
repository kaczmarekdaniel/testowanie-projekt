import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.nav`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: row;
  border-right: 1px solid ${({ theme }) => theme.colors.darkPurple};

  padding: 30px 0;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
`;

export const Logo = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  width: 10%;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 30px;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-align: right;
  margin: 15px 20px 15px 20px;
  position: relative;

  &.${activeClassName} {
    border-bottom: 1px solid violet;
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: '';
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
