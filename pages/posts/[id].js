import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import getComments from '../../lib/comments-service';
//import { DatePicker } from 'antd';
import PostComment from '../../components/post-comment';
import Comments from '../../components/comments';



export default function Post({ postData, postId, commentsData }) {
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
            <Comments data={commentsData} />
            <PostComment postId={postId} />
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


    const comments = await getComments(params.id);
    console.log(comments)

    return {
        props: {
            postData,
            postId: params.id,
            commentsData: comments
        }
    }
}

