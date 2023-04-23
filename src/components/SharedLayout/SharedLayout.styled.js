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

export const Rectangle = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  height: 8px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  background-color: #ebd0ff;
`;
