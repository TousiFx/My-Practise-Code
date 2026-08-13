const head = document.getElementById("Heading");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const ranNum = Math.floor(Math.random() * 5) + 1;
      if (ranNum > 3) {
        reject("Promise Got Rejected. Please try again. ");
      }
      head.style.color = color;
      console.log(`color change to ${color}`);
      resolve("Promises Fulfilled ");
    }, delay);
  });
}
async function demo() {
  try {
    await changeColor("red", 1000);
    await changeColor("green", 1000);
    await changeColor("blue", 1000);
    await changeColor("purple", 1000);
    console.log("");
  } catch (err) {
    console.log("Error caught.");
    console.log(err);
  }

  let a = 5;
  console.log(a);
  console.log("New Number :", a + 3);
}

/*async function greet() {
  //   throw "error 404";
  return "hello";
}
greet()
  .then((result) => {
    console.log("the promise is fullfill");
    console.log("the result was :", result);
  })
  .catch((err) => {
    console.log("promise was rejected :", err);
  });*/
/*function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
  await getNum();
}*/
