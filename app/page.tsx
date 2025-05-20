import Link from 'next/link';
import styles from './page.module.css';
import { Metadata } from "next";
import React from 'react';

export const metadata: Metadata = {
  title: "Kendrick Lawton - AI & Automation Expert",
  description: "AI solutions architect and automation expert specializing in intelligent software development and process optimization.",
};

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>Kendrick Lawton</h1>
        <Link href="mailto:kendrick@kendricklawton.com">Contact</Link>
      </header>
      <div className={styles.main}>
        <p>AI and automation are reshaping our world, creating new possibilities for innovation and efficiency. By combining intelligent systems with thoughtful automation, we can solve complex challenges and unlock unprecedented opportunities for growth and transformation. I&apos;m currently working on <Link href="https://tradebooklm.com">TradebookLM</Link>, an AI-powered trading journal that helps traders organize their trades and gain deeper insights through advanced AI analysis.</p>
        <Link href="https://github.com/kendricklawton">GitHub</Link>
        <Link href="https://www.linkedin.com/in/kendrick-lawton-257684247/">LinkedIn</Link>
        <Link href="https://x.com/KendrickLawton">Twitter</Link>
      </div>
    </div>
  );
}
