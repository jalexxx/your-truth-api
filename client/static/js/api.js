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

    const formData = {
        title: e.target.title.value,
        name: e.target.name.value,
        blog: e.target.blog.value
    };

    try {
        const options = {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
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
