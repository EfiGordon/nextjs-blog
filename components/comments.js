import { Divider, Typography } from 'antd';
import Comment from './comment';
export default function Comments(commentsData) {


    return (
        <div>
            <Divider />
            <Typography.Title level={3} mark={true}> Comments Area </Typography.Title>
            {commentsData.data.comments.map(comment => {
                return <Comment item={comment} key={comment._id} />
            })}
        </div>
    )
}