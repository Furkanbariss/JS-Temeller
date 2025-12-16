function getUsersData(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

getUsersData("https://jsonplaceholder.typicode.com/users");
