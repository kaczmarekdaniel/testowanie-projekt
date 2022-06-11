import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* padding: 32px 0 40px; */
  background-color: #d91918;
  margin: 0 0 56px;
  grid-row: 1 / 3;
  grid-column: 1 / 1;
  position: relative;
`;

export const Logo = styled.div`
  background-color: #3156a3;
  width: 140px;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 28px;
  left: 0;

  h1 {
    font-size: 15px;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 20px;
  }
`;

const activeClassName = "active-link";

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  padding-bottom: 4px;
  text-align: right;
  margin: 15px 20px 15px 20px;
  position: relative;

  &.${activeClassName} {
    border-bottom: 2px solid #fff;
  }

  &::after {
    opacity: 0;
    transition: opacity 0.4s ease-in-out;
    content: "";
    position: absolute;
    width: 18px;
    height: 3px;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    background-color: ${({ theme }) => theme.colors.darkPurple};
  }
`;
