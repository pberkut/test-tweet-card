import styled from 'styled-components';

import { NavLink as NavLinkStyled } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NavLink = styled(NavLinkStyled)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-size: 32px;
  font-weight: 700;
  color: #2a363b;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  &.active {
    color: #e84a5f;
  }
`;
