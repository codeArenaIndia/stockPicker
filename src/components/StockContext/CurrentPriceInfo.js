import React from "react";
import useFetch from "../../hook/useFetch";
import DataCard from "../Card/DataCard";
import {COLUMN_MAP} from '../../Config'


function CurrentPriceInfo({symbol}) {
    const {data, loading, error} = useFetch("currentInfo", symbol, 20000);
    const {
        noData,
        apiData = {},
    } = data;
    const CurrentPrice = apiData["Global Quote"];
    return (
        <DataCard 
            headerText="Current Price"
            loading={loading}
            noData={noData}
            error={error}

        >
            { CurrentPrice && 
            <>
                 {Object.keys(COLUMN_MAP).map(row => {
                    return <div key={row} className="CardRow">
                                <b>
                                    {COLUMN_MAP[row]} :
                                </b> 
                                {CurrentPrice[row]}
                            </div>
                })}
               <div className="CardRow"><b>Last refreshed :</b> {new Date().toLocaleTimeString()}</div>
               </>
            }
        </DataCard>
    )
}

export default CurrentPriceInfo;