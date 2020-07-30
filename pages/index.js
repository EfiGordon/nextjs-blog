import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {

  const allPostsData = getSortedPostsData();
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
      <section className={utilStyles.headingMd}>
        <h3>Hey :)</h3>
        <p>My name is Efraim Gordon and welcome to my blog</p>
        <p>Here you could find some of my notes about various topics </p>
        <p>(Mostly about Information Security and Web Development)</p>
        <p>Feel free to contact me via my
        <span className={utilStyles.space}><a href="https://www.linkedin.com/in/efigordon/" target="_blank">Linkedin</a></span>
         or
          <span className={utilStyles.space}> <a href="https://github.com/EfiGordon/" target="_blank" rel="noopener noreferrer">Github</a></span> page.</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}