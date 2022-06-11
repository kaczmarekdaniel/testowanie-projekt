import React from "react";
import {
  Logo,
  StyledLink,
  Wrapper,
} from "components/organisms/Navigation/Navigation.styles";
import { useAuth } from "hooks/useAuth";

const logout = {
  "margin-left": "120px",
};

const Navigation = () => {
  const auth = useAuth();

  return (
    <Wrapper>
      <Logo>
        <h1>
          Uniwersytet
          <br />
          Szczeciński
        </h1>
      </Logo>
      <StyledLink to="/group">Dashboard</StyledLink>
      <StyledLink to="/notes">Notes</StyledLink>
      <StyledLink to="/news">News</StyledLink>

      <StyledLink
        style={logout}
        as="a"
        className="logOut"
        onClick={auth.signOut}
      >
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
