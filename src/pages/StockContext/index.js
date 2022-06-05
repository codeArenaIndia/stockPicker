import React from "react";
import {TEXT} from '../../Config'
import StockContext from "../../components/StockContext/StockContext";
function StockDetail({symbol}) {
    return (
        <>
            <h3>{TEXT.STOCK_DETAIL} {symbol.toUpperCase()}</h3>
            <StockContext symbol={symbol}/>
        </>
    )
}
export default StockDetail;