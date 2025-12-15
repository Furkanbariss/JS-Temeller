const users = [
  {
    userId: 1,
    userPost: "dağ resmi",
  },
  {
    userId: 1,
    userPost: "deniz resmi",
  },
  {
    userId: 1,
    userPost: "araba resmi",
  },
  {
    userId: 2,
    userPost: "Uçak resmi",
  },
  {
    userId: 2,
    userPost: "oyuncak resmi",
  },
  {
    userId: 3,
    userPost: "gemi resmi",
  },
];

function getUserid(callBack) {
  setTimeout(() => {
    let userId = 2;
    callBack(userId);
  }, 1000);
}

function getPost(userId) {
  setTimeout(() => {
    users.forEach((user) => {
      if (user.userId === userId) {
        console.log(user.userPost);
      }
    });
  }, 500);
}

getUserid(getPost);
