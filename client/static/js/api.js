<<<<<<< HEAD
async function getPost(id) {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.warn(err);
    }
}

async function sendPost(e){
    e.preventDefault();
    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
        }
        
        const response = await fetch('http://localhost:3000/posts', options);
        const data = await response.json();
        window.location.hash = `#${data}`
    } catch (err) {
        console.warn(err);
    }
}

module.exports = {
    sendPost, getPost
}
=======
const res = require("express/lib/response");

const btn = document.querySelector('#msg-btn');
const post = document.querySelector('#new-post');

btn.addEventListener('click', getMessage);
post.addEventListener('submit', publishPost);

async function getPost(id) {
  try {
    const response = await fetch('http://localhost:3000/posts/${id}');
    const data = await response.json;
    return data;
  }
  catch (err) {
    res.status(500).send({err});
  }
  }



async function sendPost(e) {
  try {
    const options = {
      method: 'POST',
      headers: { "Content-Type" : "application/json"},
      body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
    }
  
  const response = await fetch('http://localhost:3000/posts/options');
  const data = await response.json();
  window.location.hash = #${data}
} catch (err) {
  console.warn(err);
}
}
>>>>>>> db65d40ced489282ec9e5376fce58adf1f08b0f9
