
import { Form, Input, Button, Divider } from 'antd';
const { TextArea } = Input;
require('isomorphic-fetch');

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 8 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
    }
};

export default function PostComment({ postId, commentsArray, setComments }) {
    const [form] = Form.useForm();

    const onFinish = values => {
        values['postId'] = postId;
        fetch('/api/comments',
            {
                method: 'POST',
                body: JSON.stringify(values),
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            }).then(response => {
                console.log({
                    response: response
                });
                form.resetFields();
                fetch('/api/comments?postId=' + postId)
                    .then(res => {
                        return res.json();
                    })
                    .then(data => setComments(data))

            })
    };

    return (
        <div>
            <Divider />
            <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} form={form}>
                <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
                    <Input />
                </Form.Item>
                <Form.Item name='comment' label="Comment">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div >

    )
}