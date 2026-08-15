import clsx from 'clsx';
import Link from '@docusaurus/Link';
import GetAppIcon from '@mui/icons-material/GetApp';
import styles from './ClosingCta.module.css';

export default function ClosingCta() {
  return (
    <section className={styles.section}>
      <div className={clsx('hp-glow', styles.glow)} aria-hidden="true" />
      <div className={clsx('hp-shell', styles.inner)}>
        <p className={styles.headline}>Jom Download. Semester dah nak start!</p>
        <Link className="hp-btn hp-btn--primary" to="/downloads">
          <GetAppIcon fontSize="small" aria-hidden="true" />
          Download free
        </Link>
      </div>
    </section>
  );
}
