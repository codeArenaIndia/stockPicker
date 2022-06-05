import React from "react";
import useFetch from "../../hook/useFetch";
import NoData from "../Misc/NoData";
import Loader from "../Misc/Loader";
import DetailContainer  from './DetailContainer'


function StockContext({symbol}) {
    const {data = {}, loading, error} = useFetch("detail", symbol);
    const {noData, apiData} = data;
    const Symbol = apiData["Symbol"];

    if (noData) {
        return <NoData />
    }

    if (loading) {
        return <Loader /> 
    }

    return (
        <section className="StockContext">
            {Symbol ?
                <>
                    <DetailContainer apiData={apiData} error={error} loading={loading} symbol={symbol} />
                </> : <>{apiData.Note}</>
            }
            
        </section>
    )
}

export default StockContext; 