import fetch from 'node-fetch'

export default async function getComments(postId) {
    const response = await fetch(process.env.BASE_URL + '/api/comments?postId=' + postId);
    return response.json();

}