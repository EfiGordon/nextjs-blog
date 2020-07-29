import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import getComments from '../../lib/comments-service';
//import { DatePicker } from 'antd';
import PostComment from '../../components/post-comment';
import Comments from '../../components/comments';
import { ConfigProvider } from 'antd'
import { getDB } from '../../services/database';


export default function Post({ postData, postId, commentsArray }) {
    return (
        <Layout>
            <Head>
                {postData.title && <title>{postData.title || 'default-value'}</title>}
            </Head>
            <article>
                {postData.title && <h1 className={utilStyles.headingXl}>{postData.title || 'default-value'}</h1>}
                {/* postData.id*/}
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date || '00-00-00'} />
                </div>

                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={[utilStyles.mainArea, postData.lang].join(' ')} />
            </article>
            <Comments data={commentsArray || []} />
            <PostComment postId={postId || 'default-value'} />
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
    const postData = await getPostData(params.id)
    const db = await getDB();
    let comments = await db.collection('comments').find({ postId: params.id }).toArray();
    const commentsArray = JSON.parse(JSON.stringify(comments));

    console.log({
        path: 'id',
        postId: params.id,
        commentsArray: commentsArray,
        postData: postData,
    })

    return {
        props: {
            postData: postData,
            postId: params.id,
            commentsArray: commentsArray
        }
    }
}

