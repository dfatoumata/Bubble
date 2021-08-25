// import { data } from "./05-data.js";
// console.log(data);

export function genererArticle(myData) {
    return myData.map(article => `
                <article>
                    <h2>${article.title}</h2>
                    <p>${article.title}</p>
                </article>
            `).join("");
}
// export let html = data.map(article => `
//                 <article>
//                     <h2>${article.title}</h2>
//                     <p>${article.title}</p>
//                 </article>
//             `).join("");
