function total(data) {
  let total = 0;
  data.map((article) => (total += article.montant));
  document.querySelector(".total").textContent = total;
}
function totalDepenses(data) {
  let total = 0;
  data.map((article) => {
    if (article.montant >= 0) {
      total += article.montant;
    }
  });
  document.querySelector(".total-depenses").textContent = total;
}
function totalRecettes(data) {
  let total = 0;
  data.map((article) => {
    if (article.montant < 0) {
      total += article.montant;
    }
  });
  document.querySelector(".total-recettes").textContent = total;
}
function details(data) {
  let html = data
    .map(
      (article) => `
            <tr>
              <td>${article.id}</td>
              <td>${article.produit}</td>
              <td>${article.montant}</td>
              <td>
                <button class="btn btn-warning" onclick=modifier(${article.id})>Modifier</button>
                <button class="btn btn-danger ms-2" onclick=supprimer(${article.id})>Supprimer</button>
              </td>
            </tr>

    `
    )
    .join("");
  document.querySelector("tbody").innerHTML = html;
}
export async function formulaireModif(id, data) {
  //console.log(id, data);
  let html = data
    .map((article) => {
      if (article.id == id) {
        return `
            <tr>
              <td colspan="4">
              <form class="d-flex  mx-5" onsubmit="return valider(this)">
                <input type="hidden" id="id" name="id" class="form-control" value="${article.id}"  />
                <input type="text" id="produit" name="produit" class="form-control my-4" value="${article.produit}" />
                <input type="text" id="montant" name="montant" class="form-control mx-4 my-4" value="${article.montant}" />
                <input type="submit" value= "Valider" class="btn btn-primary my-4" >
              <form>
            </tr>
    `;
      } else {
        return `
            <tr>
              <td>${article.id}</td>
              <td>${article.produit}</td>
              <td>${article.montant}</td>
              <td>
                <button class="btn btn-warning" onclick=modifier(${article.id})>Modifier</button>
                <button class="btn btn-danger ms-2" onclick=supprimer(${article.id})>Supprimer</button>
              </td>
            </tr>
    `;
      }
    })
    .join("");
  document.querySelector("tbody").innerHTML = html;
}
export function refresh(data) {
  total(data);
  totalDepenses(data);
  totalRecettes(data);
  details(data);
}

// let vue = {
//   total,
//   totalDepenses,
//   totalRecettes,
// };

// export default vue;
