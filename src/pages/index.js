import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import GetAppIcon from '@mui/icons-material/GetApp';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
            {siteConfig.title}
          </Heading>
          <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
            {siteConfig.tagline}
          </p>
          <div className={styles.buttons}>
            <Link className={clsx('button button--secondary button--lg', styles.cta)} to="/downloads" style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
              <span className={styles.downloadIcon} aria-hidden="true" style={{ display: 'flex', alignItems: 'center' }}>
                <GetAppIcon />
              </span>
              <span>Get App</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroPattern} aria-hidden="true" />
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Generate your IIUM Schedule with only a few clicks. App available for Android, MacOS and Windows.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
