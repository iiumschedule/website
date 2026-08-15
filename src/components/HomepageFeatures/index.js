import clsx from 'clsx';
import styles from './styles.module.css';

const Steps = [
  {
    title: 'Login to i-Ma\'luum',
    description: 'It will read and extract your class schedule.',
  },
  {
    title: 'Details auto-fill',
    description: 'The particulars (venue, days, etc) will be populated.',
  },
  {
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
          {Steps.map(({ title, description }) => (
            <div key={title} className={clsx('hp-panel', styles.step)}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.stepBody}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
