import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './FaqSection.module.css';

const Faqs = [
  {
    question: 'Is this an official IIUM app?',
    answer: (
      <>
        No. It is an independent project that reads the university's
        published <a href="https://albiruni.iium.edu.my/myapps/StudentOnline/schedule1.php">course timetable</a>.
      </>
    ),
  },
  {
    question: 'Do I need to sign in?',
    answer: <>No need. Saved timetables stay on your own device.</>,
  },
  {
    question: 'Can I export my timetable?',
    answer: (
      <>
        Yes. You can export it as an image.
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
  {
    question: 'Not available for iPhone?',
    answer: (
      <>
        Yeah, sorry :( Apple Developer account is expensize and I don't have any iPhones at my disposal. (Psst, if you want to support me financially, I'm <a href="https://github.com/sponsors/iqfareez">all ears</a>)
      </>
    ),
  },
  {
    question: 'Pricing?',
    answer: (
      <>
        It's free!
      </>
    ),
  },
];

export default function FaqSection() {
  return (
    <section className="hp-section">
      <div className="hp-shell">
        <h2 className="hp-eyebrow">"Frequently" Asked Questions</h2>
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