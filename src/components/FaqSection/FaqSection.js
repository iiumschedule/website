import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './FaqSection.module.css';

const Faqs = [
  {
    question: 'Is this an official IIUM app?',
    answer: (
      <>
        No. It is an independent student project that reads the university’s
        publicly published course listing.
      </>
    ),
  },
  {
    question: 'Do I need to sign in?',
    answer: <>No account, no sign-in. Saved timetables stay on your own device.</>,
  },
  {
    question: 'Can I export my timetable?',
    answer: (
      <>
        Yes. Export it as an image, or share the schedule file with a
        coursemate.
      </>
    ),
  },
  {
    question: 'Windows says the installer is untrusted.',
    answer: (
      <>
        Install the bundled certificate first. The{' '}
        <Link to="/windows-cert" className={styles.answerLink}>
          Windows certificate guide
        </Link>{' '}
        walks through it step by step.
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="hp-section">
      <div className="hp-shell">
        <h2 className="hp-eyebrow">FAQ</h2>
        <div className={clsx('hp-panel', styles.list)}>
          {Faqs.map(({ question, answer }) => (
            <details key={question} className={styles.item}>
              <summary className={styles.question}>
                {question}
                <span className={styles.plus} aria-hidden="true">
                  +
                </span>
              </summary>
              <p className={styles.answer}>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
