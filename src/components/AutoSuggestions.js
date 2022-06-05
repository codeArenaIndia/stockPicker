import React from "react";
import {SYMBOL,NAME,MATCH_SCORE} from '../Config'

function AutoSuggestions({suggestions,handleTriggerChange}) {
    let symbolKey = SYMBOL;
    return suggestions.map(suggestion => {
        return (
            <div key={suggestion[symbolKey]} className="SuggestionItem"  >
                <div onClick={()=>handleTriggerChange(suggestion[symbolKey])} className="SuggestionItemInfo">
                    {suggestion[symbolKey]} : <span>{suggestion[NAME]}  (Match Score : {suggestion[MATCH_SCORE]})</span>
                </div>
            </div>
        )
    })
}
export default AutoSuggestions;