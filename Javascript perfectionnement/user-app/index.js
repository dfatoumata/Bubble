let userData = [];
const getUser = async () => {
  await fetch("https://randomuser.me/api/?results=24")
    .then((serverResponse) => serverResponse.json())
    .then((data) => (userData = data.results));
  console.log(userData);
};

const displayUser = async () => {
  await getUser();
  document.body.innerHTML = userData
    .map(
      (user) => `
    <div class="card">
      <img src=${user.picture.large} alt="photo de ${user.name.first}">
      <h3>${user.name.first}<h3>
      <p>${user.location.city} , ${parserDate(user.dob.date)}</p>
       <em>Membre depuis:  ${dayCalc(user.registered.date)} jours </em>
    </div>
    `
    )
    .join("");
};
displayUser();
const dayCalc = (dateIns) => {
  let today = new Date();
  let todayTimestamp = Date.parse(today);
  let timeStamp = Date.parse(dateIns);
  return Math.ceil((todayTimestamp-timeStamp)/8.64e7);
};

const parserDate = (dateIso) => {
  let newDate = new Date(dateIso).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return newDate;
};
