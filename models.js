//models.js
const Model = function(){
    
    const stocksArr = [
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
    function getPrefex(stockObj, searchWord){
        let n = searchWord.length
        //return true if the first n characters of the stock name match the search word (case insensitive)
        return stockObj.name.substring(0, n).toLowerCase() === searchWord.toLowerCase()
    }
    async function getStocks(searchWord){
        let stocksMatch=[]
        for(let stock of stocksArr){
            if(getPrefex(stock, searchWord)){
                stocksMatch.push(stock)
            }
        }
        return stocksMatch
    }
    return {
        getStocks
    }
}
export default Model;