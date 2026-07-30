import clsx from 'clsx';
import styles from './QuoteSection.module.css';

const ARTICLE_URL = 'https://news.iium.edu.my/?p=168911';

export default function QuoteSection() {
    return (
        <section className={styles.quoteSection}>
            <div className="hp-shell">
                <figure className={clsx('hp-panel', 'hp-reveal', styles.card)}>
                    <blockquote className={styles.quote}>
                        “...with IIUM Schedule Maker App, students will only need to fill
                        in the course code and section for it to automatically fill up
                        other information such as venue and lecturers’ names. The process
                        can be done with fewer clicks, thus improving productivity.”
                    </blockquote>
                    <figcaption className={styles.source}>
                        <a
                            href={ARTICLE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.articleLink}>
                            <img
                                src={require('@site/static/img/IIUM-today-LOGO-optim.png').default}
                                alt="IIUM Today"
                                width={478}
                                height={178}
                                className={styles.logo}
                            />
                        </a>
                    </figcaption>
                </figure>
            </div>
        </section>
    );
}
