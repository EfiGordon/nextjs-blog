import { formatDistance, parseISO } from 'date-fns'
import { Comment } from 'antd';

export default function Comments({ item }) {

    return (
        <Comment
            author={<a href={"mailto:" + item.email}>{item.name}</a>}
            content={item.comment}
            datetime={<span>{formatDistance(parseISO(item.date), new Date())}</span>}
        />
    )
}