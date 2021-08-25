const url = "http://localhost:4221/depenses";

async function getDepenses() {
  const responseServeur = await fetch(url);
  const data = await responseServeur.json();
  return data;
}
async function creerDepense(depense) {
  const responseServeur = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(depense),
  });
  return await getDepenses();
}
async function supprimerDepense(id) {
  await fetch(url + "/" + id, { method: "DELETE" });
  return await getDepenses();
}
async function modifierDepense(depense) {
  const responseServeur = await fetch(url + "/" + depense.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(depense),
  });
  return await getDepenses();
}
let model = {
  get: getDepenses,
  post: creerDepense,
  delete: supprimerDepense,
  put: modifierDepense,
};
export default model;
