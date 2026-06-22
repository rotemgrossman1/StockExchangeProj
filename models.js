const Model = function(){
        const API_KEY = "hwEtnYZNRwItKqkc9MJlK07zn4rnj4Oa"
        async function getStocks(searchWord){ 
            if (!searchWord) return [];
            
            // Using the updated /stable/search-symbol endpoint which works smoothly with free tier keys
            const response = await fetch(`https://financialmodelingprep.com/stable/search-symbol?query=${searchWord}&limit=10&exchange=NASDAQ&apikey=${API_KEY}`);
        
        if(!response.ok){
            console.error(`API error: ${response.status}`);
            return []; 
        }
        const data = await response.json();
        return Array.isArray(data) ? data : (data.results || []);
    }
    return { getStocks };
}
export default Model;