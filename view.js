//view.js
// Select the DOM elements (searchBar, searchBtn, loading, results).

const Renderer = () => {
    
const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")
const loading = document.querySelector("#loading")
const results = document.querySelector("#results")
// Set up a dummy array containing 10 stock objects to use as mock data.
const displayResults = function(resultsFromBrowser){
    

            results.innerHTML = ""
            
            for(let stock of resultsFromBrowser){
                const stockToShow = document.createElement("li")
                const companyLink = document.createElement("a")
                companyLink.href = '/company.html?symbol=' + stock.symbol
                companyLink.innerHTML = stock.name
                stockToShow.appendChild(companyLink)
                results.appendChild(stockToShow)
            }
            loading.style.display = "none"
      

  
}

return {
    displayResults: displayResults
}
}
export default Renderer;