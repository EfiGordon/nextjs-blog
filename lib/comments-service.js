import fetch from 'node-fetch'

export default async function getComments(postName) {
    console.log({
        postName: postName
    })
    const response = await fetch(process.env.BASE_URL + '/api/comments');
    return response.json();

}