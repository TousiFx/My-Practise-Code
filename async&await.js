async function greet() {
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
  });
