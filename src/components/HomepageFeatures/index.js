import clsx from 'clsx';
import styles from './styles.module.css';

const Steps = [
  {
    step: '01',
    title: 'Login to i-Ma\'luum',
    description: 'It will read and extract your class schedule.',
  },
  {
    step: '02',
    title: 'Details auto-fill',
    description: 'The particulars (venue, days, etc) will be populated.',
  },
  {
    step: '03',
    title: 'Save and share',
    description: 'Colour-code it, refer anytime. Can export to image as well.',
  },
];

export default function HomepageFeatures() {
  return (
    <section className="hp-section">
      <div className="hp-shell">
        <h2 className="hp-eyebrow">How it works</h2>
        <div className={styles.steps}>
          {Steps.map(({ step, title, description }) => (
            <div key={step} className={clsx('hp-panel', styles.step)}>
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
