// https://api.blablagues.net/?rub=blagues
function getJoke() {
  let header = document.getElementById("header");
  let content = document.getElementById("content");

  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((res) => {
      const joke = res.data.content;
      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}
getJoke();
document.body.addEventListener("click", getJoke);
