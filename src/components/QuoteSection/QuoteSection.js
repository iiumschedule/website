import clsx from 'clsx';
import styles from './QuoteSection.module.css';

export default function QuoteSection() {
    return (
        <section className={styles.quoteSection}>
            <blockquote
                className={clsx(styles.quote, 'text--center')}>
                "...with IIUM Schedule Maker App, students will only need to fill in the course code and section for it to automatically fill up other information such as venue and lecturers’ names. The process can be done with fewer clicks, thus improving productivity."
            </blockquote>
            <div className={styles.sourceContainer}>
                <span className={styles.source}>
                    IIUM Today
                </span>
                <a href="https://news.iium.edu.my/?p=168911" target="_blank" rel="noopener noreferrer">
                    <img
                        src={require('@site/static/img/IIUM-today-LOGO-optim.png').default}
                        alt="IIUM Today Logo"
                        className={styles.logo}
                    />
                </a>
            </div>
        </section>
    );
}
