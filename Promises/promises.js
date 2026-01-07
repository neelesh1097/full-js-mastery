const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Data"), 1000);
});

fetchData
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    console.log("Always runs");
  });



function getUser(userId) {
  return new Promise((resolve, reject) => {
    // Simulate API call
    setTimeout(() => {
      if (userId === 1) {
        resolve({
          id: 1,
          name: "Neelesh",
          role: "Developer"
        });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

getUser(1)
  .then(user => {
    console.log("User data:", user);
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("API call completed");
  });




//async await

  async function getUser() {
  try {
    const user = await fetch("/api/user");
    const data = await user.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
