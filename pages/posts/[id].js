import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import getComments from '../../lib/comments-service';

export default function Post({ postData }) {
    return (

        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                {/* postData.id*/}
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={[utilStyles.mainArea, postData.lang].join(' ')} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params }) {

    // const postData = getPostData(params.id)
    const postData = await getPostData(params.id)
    console.log({
        postData: postData
    });

    try {
        const comments = await getComments(params.id);
        console.log(comments)
    } catch (e) {
        console.log({
            path: '[id].js',
            e: e
        })
    }
    return {
        props: {
            postData
        }
    }
}

