// Select the DOM elements (searchBar, searchBtn, loading, results).
const searchBar = document.querySelector("#searchBar")
const searchBtn = document.querySelector("#searchBtn")
const loading = document.querySelector("#loading")
const results = document.querySelector("#results")
// Set up a dummy array containing 10 stock objects to use as mock data.
function getPrefex(stockObj, searchWord){
    let n = searchWord.length
    //return true if the first n characters of the stock name match the search word (case insensitive)
    return stockObj.name.substring(0, n).toLowerCase() === searchWord.toLowerCase()
}
const dummyStocksArr = [
  {
    symbol: "AAPL",
    name: "Apple Inc.",
    price: 150.00,
    change: 1.25
  },
  {
    symbol: "GOOGL",
    name: "Alphabet Inc.",
    price: 2800.00,
    change: -15.50
},
  {
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    price: 3400.00,
    change: 20.00
  }, 
  {
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: 300.00,
    change: 2.50
  }
]
setTimeout(() => {
// Write an event listener for the button click that will eventually render these stocks.
    searchBtn.addEventListener("click", ()=>{
        const resultsFromBrowser = dummyStocksArr.filter(stock=>getPrefex(stock, searchBar.value))
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