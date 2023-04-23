// import { Link } from 'react-router-dom';
import { Container, Link } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <Container>
      <Link to={'/'}>*Go to home page*</Link>
      <h2>^</h2>
      <h2>Error 404. Not found page.</h2>
    </Container>
  );
};

export default NotFoundPage;
