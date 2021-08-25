// let reponseServer = await fetch(
//     "https://jsonplaceholder.typicode.com/posts"
// );
// export let data = await reponseServer.json();
// console.log(data);

export async function dataBdd() {
    let reponseServer = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
    );
    let data1 = await reponseServer.json();
    return data1;
}
