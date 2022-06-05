import React, {useState, useEffect} from "react";
import {fetchSuggestions} from "../../api/fetch";
import AutoSuggestions from "../../components/AutoSuggestions";
import SearchBox from '../../components/SearchBox';
import RecentSearch from '../../components/RecentSearch';
import {DELAY} from '../../Config';
import StockDetail from  '../StockContext'
import "./index.css";


function StockSearch() {
    const [autoSuggest, setAutoSuggest] = useState([])
    const [value, setValue] = useState("");
    const [recentSearches,setRecentSearches] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [showSuggestion,setShowSuggestion] = useState(false);
    const [details,setDetails] = useState(false)
    const [searchText,setSearchText] = useState('');
    const [noRecord,setNoRecord] = useState(false)

    useEffect(() => {
        let debounceTimeout;
        if (value) {
             debounceTimeout = setTimeout(() => {
                setLoading(true)
                setNoRecord(false)
                fetchSuggestions(value).then(data => {
                    setLoading(false);
                    const res = data.data;
                    if (res && res.bestMatches && res.bestMatches.length) {
                        setAutoSuggest(res.bestMatches);
                    }else{
                        setNoRecord(true)
                    }
                }).catch(err => {
                    setLoading(false);
                    setError(err.message)
                })
            }, DELAY)
        }
        return () => {
            clearTimeout(debounceTimeout)
        }
    }, [value])

    const handleChange = (e) => {
        setValue(e.target.value);
    }

    const handleFocus = () => {
        setShowSuggestion(true)
    }
    
    const handleSearch = () => {
        let temp = [...recentSearches,value];
        setRecentSearches(temp);
        setDetails(true)
        setShowSuggestion(false);
        setSearchText(value)
    }
    
    const handleTriggerChange = (val) =>{
        let temp = [...recentSearches,val];
        setRecentSearches(temp);
        setValue(val);
        setShowSuggestion(false)
        setDetails(true)
        setSearchText(val)
    }
    return (
        <main className="searchBody">
                <section className="SearchBox">
                    <SearchBox  value={value} handleChange={handleChange} handleSearch={handleSearch} handleFocus={handleFocus}/>
                    <RecentSearch  recentSearches={recentSearches} blur={showSuggestion} handleTriggerChange={handleTriggerChange}/>
                </section>
                {
                     showSuggestion && value !== '' &&  <section  className="suggestionBox">
                        {loading && <h2 className="p-l-20">Loading...</h2>}
                        {noRecord && <h2 className="p-l-20">No record found</h2>}
                        {autoSuggest && !noRecord && !loading && <AutoSuggestions suggestions={autoSuggest} handleTriggerChange={handleTriggerChange}/>}
                    </section> 
                }
               {details && <div className={showSuggestion ? "blur" : ''}><StockDetail symbol={searchText}/> </div>} 
                      
        </main>
        
    )
}
export default StockSearch;