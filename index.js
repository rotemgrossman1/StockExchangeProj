//index.js
const models = require("./models.js")
function getStocks(searchWord){
    return fetch(models.getStocks(searchWord))
    .then(res => res.json())
}
