import { Divider, Typography } from 'antd';
import Comment from './comment';
import { useEffect } from "react";
export default function Comments({ postId, commentsArray, setComments }) {


    // fetch data
    useEffect(() => {
        fetch('/api/comments?postId=' + postId)
            .then(res => {
                return res.json();
            })
            .then(data => setComments(data))
    }, [])


    if (!commentsArray) return (<Typography.Title level={3} mark={true}> Loading Comments Area ... </Typography.Title>)

    return (
        <div>
            <Divider />
            <Typography.Title level={3} mark={true}> Comments Area </Typography.Title>
            {(commentsArray.length > 0) ? commentsArray.map(comment => {
                return <Comment item={comment} key={comment._id} />
            }) : ""

            }
            {/* {commentsArray.data.map(comment => {
                return <Comment item={comment} key={comment._id} />
            })} */}
        </div>
    )
}

