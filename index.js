//index.js
import Model from './models.js';
import Renderer from './view.js';
const model = Model();
const renderer = Renderer();

// renderer.displayData()
// function getStocks(searchWord){
//     return fetch(models.getStocks(searchWord))
//     .then(res => res.json())
// }

const searchBtn = document.querySelector("#searchBtn")
    searchBtn.addEventListener("click",() =>{
        init()
    })
const init = async function () {
    const searchBar = document.querySelector("#searchBar");
    const resultsFromBrowser = await model.getStocks(searchBar.value)
    renderer.displayResults(resultsFromBrowser)
}

