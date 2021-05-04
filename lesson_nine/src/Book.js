import React from "react"


export const Book = ({title="No Title Provided", author="No Author", pages="None Listed", freeBookMark}) => {
    return(
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>pages: {pages}</p>
            <p>Free Book Mark Today: {freeBookMark ? 'yes' : 'no'}</p>
        </section>
    )
}