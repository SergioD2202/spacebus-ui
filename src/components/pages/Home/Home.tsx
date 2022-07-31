/* eslint-disable @typescript-eslint/no-empty-interface */
import React, { FC } from 'react';
import styles from './Home.module.scss';
import mainImage from '../../../images/saturn.webp';
import exoplanets from '../../../images/exoplanets.jpg';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
  <div className={styles.Home} data-testid="Home">
    <div className={styles.imageContainer}>
      <img src={mainImage} alt="main image.webp" className={styles.mainImage} />
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          Conoce lo que el universo tiene para ti
        </div>
        <div className={styles.subtitle}>
          Con Spacebus, viaja a los planetas más lejanos de la vasta vía láctea
          y mucho más.
        </div>
      </div>
    </div>

    <div className={styles.imageContainer}>
      <img src={exoplanets} alt="exoplanets.jpg" className={styles.mainImage} />
      <div className={styles.titleContainer}>
        <div className={styles.title}>Mira nuestra selección</div>
        <div className={styles.subtitle}>
          Tenemos una amplia gama de tickets para escoger.
        </div>
      </div>
    </div>
  </div>
);

export default Home;
