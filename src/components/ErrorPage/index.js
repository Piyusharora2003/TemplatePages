import * as React from 'react';
import { useSpring, animated, config } from '@react-spring/web'
import styles from './index.module.css'
import { Link } from 'react-router-dom';

function ErrorPage(props){
  const errorMessage = {
      heading : props.heading || "URL NOT FOUND",
      message : props.message || "The page you requested does not exist. ",
      statusCode : props.statusCode || 404,
  }
  const [{ background }] = useSpring(
    () => ({
      from: { background: 'var(--step0)' },
      to: [
        { background: 'var(--step0)' },
        { background: 'var(--step1)' },
        { background: 'var(--step2)' },
        { background: 'var(--step3)' },
        { background: 'var(--step4)' },
      ],
      config: config.molasses,
      loop: {
        reverse: true,
      },
    }),
    []
  )
  return (
    <div>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>Error {errorMessage.statusCode}</h1>
        <h2>{errorMessage.heading}</h2>
        <h2>{errorMessage.message}</h2>
      </div>
      <Link to="/" className={styles.backbtn}>
          Go Back Home
      </Link>
      <div className={styles.container}>
        <div className={styles.squares}>
          <div className={styles.block} />
          <div className={styles.block} />
          <animated.div className={styles.block} style={{ background }} />
        </div>
        <animated.div className={styles.background} style={{ background }} />
      </div>
    </div>
  )
}

export default ErrorPage;


