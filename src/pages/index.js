import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import GetAppIcon from '@mui/icons-material/GetApp';

import HomepageFeatures from '@site/src/components/HomepageFeatures';
import QuoteSection from '@site/src/components/QuoteSection/QuoteSection';
import FaqSection from '@site/src/components/FaqSection/FaqSection';
import ClosingCta from '@site/src/components/ClosingCta/ClosingCta';

import '@site/src/css/homepage.css';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.hero}>
      <div className={clsx('hp-glow', styles.heroGlow)} aria-hidden="true" />
      <div className="hp-grid-lines" aria-hidden="true" />

      <div className={clsx('hp-shell', styles.heroInner)}>
        <Heading as="h1" className={styles.heroTitle}>
          The timetable app
          <br />
          II*M never built.
        </Heading>

        <p className={styles.heroSubtitle}>
          Enter a course code and section (or connect with the <i>i-Ma'luum</i>). The details will fill
          themselves in.
        </p>

        <div className={styles.heroActions}>
          <Link className="hp-btn hp-btn--primary" to="/downloads">
            <GetAppIcon fontSize="small" aria-hidden="true" />
            Download free
          </Link>
          <Link className="hp-btn hp-btn--ghost" to="/docs/extract">
            Read the guide
          </Link>
        </div>

        <p className={clsx('hp-mono', styles.heroMeta)}>
          Windows · Android · macOS
        </p>

        <div className={styles.device}>
          <img
            src={require('@site/static/img/schedule-hero-optim.png').default}
            alt="A week of classes laid out in the IIUM Schedule app"
            width={1790}
            height={1090}
            className={styles.deviceScreen}
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      wrapperClassName="homepage-root"
      title={`Hello from ${siteConfig.title}`}
      description="Generate your IIUM Schedule with only a few clicks. App available for Android, MacOS and Windows.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <QuoteSection />
        <FaqSection />
        <ClosingCta />
      </main>
    </Layout>
  );
}
