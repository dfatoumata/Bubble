const fs = require("fs");
const data = fs.readFile('./12-exemple.html', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})
