import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NavLink, Rectangle, Wrapper } from './SharedLayout.styled';
import { Loader } from '../../components/Loader';

export function SharedLayout() {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/tweets">Tweets</NavLink>
        </nav>
        <Rectangle />
      </header>
      <main>
        <Suspense
          fallback={
            <Wrapper>
              <Loader />
            </Wrapper>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
