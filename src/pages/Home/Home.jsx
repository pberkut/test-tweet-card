import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Tweets manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

export default Home;
