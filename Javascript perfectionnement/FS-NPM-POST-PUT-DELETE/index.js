let myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};
const init2 = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    pseudo: "From Scratch",
    message: "Yo les gens !",
  }),
  mode: "cors",
  credentials: "same-origin",
};
const init3 = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
  },
  mode: "cors",
  credentials: "same-origin",
};
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/posts", init2).then((res) => console.log(res));
});
document.querySelector("button").addEventListener("click", (e) => {
  e.preventDefault();
  fetch("http://localhost:3000/posts/3", init3).then((res) => console.log(res));
});
fetch("http://localhost:3000/posts", init).then((res) => console.log(res));
