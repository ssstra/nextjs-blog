import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0vh;
  top:2vh;
  position:absolute; 
  right:2vh;
`;

const ThemeToggle = dynamic(() => import("./ThemeToggle"), {
  ssr: false,
});

const name = 'Shane'
export const siteTitle = 'Shane Strachan'

export default function Layout({ children, home }) {
  return (
      <div className={styles.boxed}>
      <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta
          name="description"
          content="Personal website"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className={styles.header}>
        {home ? (
          <>
          <Link href="/">
              <a>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={111}
              width={111}
              alt={name}
            />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  className={utilStyles.borderCircle}
                  height={111}
                  width={111}
                  alt={name}
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>      
      <Container>
      <main>
    <ThemeToggle />
      </main>
    </Container>
      <main>{children}</main>
      {!home && (       
        <div className={styles.backToHome}>
          <Link href="/">
            <a>⇦ Back to home</a>
          </Link>
        </div>
      )}
    </div>
    </div>
  )
}
