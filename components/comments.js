import { Divider, Typography } from 'antd';
import Comment from './comment';
export default function Comments(commentsArray) {
    console.log({
        commentsData: commentsArray
    })

    return (
        <div>
            <Divider />
            <Typography.Title level={3} mark={true}> Comments Area </Typography.Title>
            {commentsArray.data.map(comment => {
                return <Comment item={comment} key={comment._id} />
            })}
        </div>
    )
}