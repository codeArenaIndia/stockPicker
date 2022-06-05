import axios from "axios";

import {APIBASEURL, getParams} from '../Config'

async function fetchSuggestions(keyword) {
    const params = getParams("search", keyword)
    return axios.get(APIBASEURL, {params}).catch(e => {
        throw new Error(e);
    })
}

async function fetchDetail(fn, symbol) {
    const params = getParams(fn, symbol)
    return axios.get(APIBASEURL, {params}).catch(e => {
        throw new Error(e);
    })
}

export {
    fetchDetail,
    fetchSuggestions
}