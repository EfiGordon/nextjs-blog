import fetch from 'node-fetch'

export default async function getComments(postId) {
    const response = await fetch(process.env.BASE_URL + '/api/comments?postId=' + postId);
    console.log({
        path: 'comments-service',
        response: response
    })
    if (response.status === 404) return [];
    return response.json();

}