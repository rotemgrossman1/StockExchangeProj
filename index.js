//index.js
import Model from './models.js';
import Renderer from './view.js';
const model = Model();
const renderer = Renderer();


const searchBtn = document.querySelector("#searchBtn")
    searchBtn.addEventListener("click",async() =>{
        renderer.showLoading()
        await new Promise(resolve => setTimeout(resolve, 1000));
        await init()
        renderer.hideLoading()
        
    })
const init = async function () {
    const searchBar = document.querySelector("#searchBar");
    const resultsFromBrowser = await model.getStocks(searchBar.value)
    renderer.displayResults(resultsFromBrowser)
    
}

