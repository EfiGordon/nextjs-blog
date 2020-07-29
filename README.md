
Missions:
1.  Connect to DB✔
2.  Build comments area (html and form that will communicate with DB)✔
3.  Auth for ability for admin to delete the comments
4.  Delete the hardcoded uri and use process.env
5.  satate managment for the comments
6.  add support for nested comments and add likes.


Basic structore of the comments will be:
{
    comment: 'Wow, great article!',
    authorDetails: {
        email: blabla@blabla.com,
        name: 'Johny Cash"
    }
    nestedComments: [],
}