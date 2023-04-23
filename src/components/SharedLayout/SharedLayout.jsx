import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
// import { Container, Header, Link } from './SharedLayout.styled';
import { Container } from 'components/Container';
import { NavLink } from 'react-router-dom';

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
      </header>
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
}
