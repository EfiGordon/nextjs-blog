import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
//import { DatePicker } from 'antd';
import PostComment from '../../components/post-comment';
import Comments from '../../components/comments';
import { useState } from 'react';


export default function Post({ postData, postId }) {
    const [commentsArray, setComments] = useState(null)

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
            <Comments postId={postId} commentsArray={commentsArray} setComments={setComments} />
            <PostComment postId={postId} commentsArray={commentsArray} setComments={setComments} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const paths = getAllPostIds();
    const postData = await getPostData(params.id)
    // const db = await getDB();
    // let comments = await db.collection('comments').find({ postId: params.id }).toArray();
    // const commentsArray = JSON.parse(JSON.stringify(comments));


    return {
        props: {
            postData: postData,
            postId: params.id,
        }
    }
}

