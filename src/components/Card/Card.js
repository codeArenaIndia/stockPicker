import React from "react";
import NoData from "../Misc/NoData";
function Card({
    headerText,
    children,
    noData
}) {
    if (noData) {
        return <NoData />
    }
    return (
        <section className="Card">
            <section className="CardHeader">
                {headerText}
            </section>
            <section className="CardBody">
                {children}
            </section>
        </section>
    )
}

export default Card;