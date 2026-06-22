//view.js
// Select the DOM elements (searchBar, searchBtn, loading, results).
const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")
const loading = document.querySelector("#loading")
const results = document.querySelector("#results")
// Set up a dummy array containing 10 stock objects to use as mock data.
setTimeout(() => {
// Write an event listener for the button click that will eventually render these stocks.
    searchBtn.addEventListener("click", ()=>{
        results.innerHTML = ""
        const resultsFromBrowser = index.getStocks(searchBar.value)
        loading.style.display = "block"
        for(let stock of resultsFromBrowser){
            const stockToShow = document.createElement("li")
            const companyLink = document.createElement("a")
            companyLink.href = '/company.html?symbol=' + stock.symbol
            companyLink.innerHTML = stock.name
            stockToShow.appendChild(companyLink)
            results.appendChild(stockToShow)
        }
        loading.style.display = "none"
    }, 1000)

})