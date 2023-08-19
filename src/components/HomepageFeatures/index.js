import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Many Taylor Swift Songs',
    Svg: require('@site/static/img/eratour.svg').default,
    description: (
      <>
        Recorded some lyrics and song links that I really like.
      </>
    ),
  },
  {
    title: 'Some Guitar Chords',
    Svg: require('@site/static/img/transistor.svg').default,
    description: (
      <>
        Some guitar tabs, mostly guitar tabs for Taylor songs. Maybe some piano sheet music.
      </>
    ),
  },
  {
    title: 'A Few Personal Journal',
    Svg: require('@site/static/img/lila.svg').default,
    description: (
      <>
        Some fragments of text written in the memo, maybe one day I will let them see the light of day.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
