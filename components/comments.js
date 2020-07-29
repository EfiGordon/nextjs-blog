import { Divider, Typography } from 'antd';
import Comment from './comment';
export default function Comments(commentsArray) {
    console.log({
        commentsArray: commentsArray,
        commentsArrayData: commentsArray.data
    })

    return (
        <div>
            <Divider />
            <Typography.Title level={3} mark={true}> Comments Area </Typography.Title>
            {(commentsArray.data.length > 0) ? commentsArray.data.map(comment => {
                return <Comment item={comment} key={comment._id} />
            }) : ""

            }
            {/* {commentsArray.data.map(comment => {
                return <Comment item={comment} key={comment._id} />
            })} */}
        </div>
    )
}

export async function getServerSideProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}