const head = document.getElementById("Heading");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      head.style.color = color;
      console.log(`color change to ${color}`);
      resolve("color changed");
    }, delay);
  });
}
async function demo() {
  await changeColor("red", 1000);
  await changeColor("pink", 1000);
  await changeColor("blue", 1000);
  await changeColor("yellow", 1000);
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
