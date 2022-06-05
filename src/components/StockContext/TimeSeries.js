import React from "react";
import { Chart } from "react-google-charts";
import useFetch from "../../hook/useFetch";
import DataCard from "../Card/DataCard";
import {CHART_OPTIONS , getData} from '../../Config';


function TimeSeries({symbol}) {
    const {data, loading, error} = useFetch("dailyTrend", symbol);
    const {noData,apiData} = data;
    
    return (
        <DataCard  headerText="Stock price chart" loading={loading}  noData={noData} error={error} >
        {
            apiData["Time Series (Daily)"] && <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={getData(apiData)}
                options={CHART_OPTIONS}
            />
        }
        </DataCard>
    )
}

export default TimeSeries;