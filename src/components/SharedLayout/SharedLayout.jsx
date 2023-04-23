import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, NavLink } from './SharedLayuot.styled';

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
