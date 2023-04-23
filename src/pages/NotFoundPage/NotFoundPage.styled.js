import styled from 'styled-components';

import { Link as LinkStyled } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
`;

export const Link = styled(LinkStyled)`
  display: inline-block;
  padding: 12px;
  font-size: 32px;
  font-weight: 700;

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: #e84a5f;
  }

  &.active {
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
