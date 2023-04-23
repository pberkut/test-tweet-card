import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NavLink, Rectangle } from './SharedLayout.styled';
import { Loader } from 'components/Loader';
import { Wrapper } from 'pages/NotFoundPage/NotFoundPage.styled';

export function SharedLayout() {
  return (
    <Container>
      <header>
        <nav>
          <NavLink to="/" end>
            Home1
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
