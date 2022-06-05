

import CurrentPriceInfo from "./CurrentPriceInfo";
import TimeSeries from "./TimeSeries";
import DataCard from "../Card/DataCard";
import {DATA_MAP} from '../../Config'

const DetailContainer = ({apiData, error, loading, symbol})=>{
    return (
        <div>
            <div className="detailContainer">
                <DataCard 
                    headerText={`Symbol ${symbol.toUpperCase()}`}
                    loading={loading}
                    noData={!Symbol}
                    error={error}>
                    {
                        Symbol &&
                        Object.keys(DATA_MAP).map(row => {
                            return <div key={row} className="CardRow"><b>{DATA_MAP[row]} :</b> {apiData[row]}</div>
                        })
                    }
                </DataCard>
                <TimeSeries symbol={symbol}/>
            </div>
            <div className="currentPrice"> 
                <CurrentPriceInfo symbol={symbol}/>
            </div>
        </div>
    )
}

export default DetailContainer;