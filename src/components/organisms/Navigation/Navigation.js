import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';
import { useAuth } from 'hooks/useAuth';

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

      <StyledLink as="a" className="logOut" onClick={auth.signOut}>
        Logout
      </StyledLink>
    </Wrapper>
  );
};

export default Navigation;
