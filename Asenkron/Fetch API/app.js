// function getUsersData(url) {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

// getUsersData("https://jsonplaceholder.typicode.com/users");

//-----------------------------------------------------------------------------------------------------------------------

document.querySelector("#button").addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) =>
      fetch(`https://jsonplaceholder.typicode.com/comments?postId=${data.id}`)
        .then((response) => response.json())
        .then((allpostdata) => console.log(allpostdata))
    )
    .catch((err) => console.log(err));
});

//! asycn-await ile yapımı
document.querySelector("#button2").addEventListener("click", async () => {
  const post = await (
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
  ).json();
  const comments = await (
    await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${post.id}`
    )
  ).json();
  console.log(post, comments);
});
