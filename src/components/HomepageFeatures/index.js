import clsx from 'clsx';
import styles from './styles.module.css';

const Steps = [
  {
    step: '01',
    title: 'Enter course codes',
    description: 'Code and section per class. That is the entire input.',
  },
  {
    step: '02',
    title: 'Details auto-fill',
    description: 'Venue, lecturer and time come from the published listing.',
  },
  {
    step: '03',
    title: 'Save and share',
    description:
      'Colour-code it, keep it offline, export an image for the group chat.',
  },
];

export default function HomepageFeatures() {
  return (
    <section className="hp-section">
      <div className="hp-shell">
        <h2 className="hp-eyebrow">How it works</h2>
        <div className={styles.steps}>
          {Steps.map(({ step, title, description }) => (
            <div key={step} className={clsx('hp-panel', 'hp-reveal', styles.step)}>
              <div className={styles.stepNumber}>{step}</div>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepBody}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
