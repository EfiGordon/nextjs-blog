---
title: 'Learning Google Cloud'
date: '2020-08-06'
---

Google Cloud has a free tier of 300$ so I wanted to try this and earn some cloud skills.   
So in my journey of learning GCP here I'll share with you my notes.  

The reasons that I chose GCP over Azre / AWS are:
* GCP has much more friendly user experience (for my opinion)
* GCP shows you the esitmated monthly cost for your service before creating it
* I like Google products :) 

1.  So my first recormendation is to turn on billing alert, I turned it on 10$ per month.
2.  Look at the GCP [calculator](https://cloud.google.com/products/calculator)



So the first thing we need to do is to create a new project in the GCP.   
Next step is  to download gcloud SDK.  
Great, now we can actually deploy services to the cloud.

Let's create `index.js`  with the following content:

`
exports.helloGET = (req, res) => {
    res.send('Hello World!');
};
`

now in the cmd we will type:

`gcloud functions deploy helloGET --runtime nodejs12 --trigger-http --allow-unauthenticated`

and that's it.  
We have deployed our first hello world cloud function (known as lambda in AWS)  
You should see a link to the API entry ponit in the cmd.
