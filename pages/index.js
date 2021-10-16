import Head from 'next/head'
import useRouter from 'next/router'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'
import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 0vh;
  top:2vh;
  position:absolute; 
  right:2vh;
`;

const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
    return (
    <Layout home>
      <Head>  
        <title>{siteTitle}</title>
      </Head>
      <Container>
      <main>
    <ThemeToggle />
      </main>
    </Container>
      <section className={utilStyles.headingMd}>
        <p className="intro">                
        <h1 className="title">&nbsp;<Image
                  priority
                  src="planet.svg"
                  height={31}
                  width={31}
                  alt="planet"
                />&nbsp;ssxrs.dev</h1>
        This is the personal index site for <b>Shane Strachan</b>, a JavaScript engineer and 
        researcher based in Washington state. You can read more about my career and qualifications on the Bio
        page below or reach out to my <a href="mailto:ss.inboxes@gmail.com">email</a> with direct enquiries. Thanks for visiting!<br />
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <footer className="footer">
        <h2 className={utilStyles.headingLg}><span class="material-icons md-18">
sailing</span>{' '} explore </h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
  <Link href={`/posts/${id}`}><a><span class="material-icons md-12">
            subdirectory_arrow_right</span>{title}</a>
  </Link>
</li>
          ))}
        </ul>
        </footer>
      </section>
    </Layout>
  )
}