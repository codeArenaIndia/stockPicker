export const DELAY = 1000;
export const SYMBOL = "1. symbol";
export const NAME = "2. name";
export const MATCH_SCORE = "9. matchScore";


export const APIBASEURL = "https://www.alphavantage.co/query";

export const APIFUNCTIONS = {
    detail : "OVERVIEW",
    search : "SYMBOL_SEARCH",
    dailyTrend : "TIME_SERIES_DAILY",
    currentInfo : "GLOBAL_QUOTE"
}

export const API_KEY = "W4V1EPZJFD7HVBFN";
export const TEXT = {
    STOCK_DETAIL: 'Stock Detail for '
}


export const getParams = (apiFn, keyword) => {
    let params = {
        apikey : API_KEY,
        function : APIFUNCTIONS[apiFn]
    }
    if (apiFn === "search") {
        params.keywords = keyword
    } else {
        params.symbol = keyword
    }
    return params;
}

export const DATA_MAP = {
    Name : "Name",
    Description : "Description",
    MarketCapitalization : "Market Capitalization",
    PERatio : "P/E Ratio",
    Currency : "Currency",
    Industry: 'Industry'
}

export const COLUMN_MAP = {
    "05. price" : "Current Price",
    "07. latest trading day" : "Latest trading day",
}

export const CHART_OPTIONS = {
    title: "Stock Prices",
    curveType: "function",
    legend: { position: "bottom" },
  };


export function getData(data) {
    const d = data["Time Series (Daily)"] || {};
    const chData = Object.keys(d).map(item => {
        const currItem = d[item];
        const p = currItem["2. high"];
        return [item, Number(p)]
    })
    chData.unshift(["Date", "Price"]);
    return chData
}