import React from "react";

function RecentSearch({recentSearches, blur, handleTriggerChange}) {
    return (
        < div className={blur ? "blur recentSearchBox" : 'recentSearchBox'}>
            {recentSearches.length ? <p className="m-l-20 m-b-0">Recent Searches :</p> : null}
            <div className="recentSearchText">
                {
                    recentSearches && recentSearches.map((item,index)=>{
                        return <button key={`${item}_${index}`} onClick={()=>handleTriggerChange(item)} className="recentBtns">{item}</button>
                    })
                }
            </div>

       </div>
    )
}

export default RecentSearch;