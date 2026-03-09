import axios from "axios";
async function getPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
}
getPosts().then(posts => {
    posts.forEach(post => {
        console.log(post.title);
    });
});
//# sourceMappingURL=webReq.js.map