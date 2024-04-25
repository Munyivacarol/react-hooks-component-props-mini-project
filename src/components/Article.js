import React from "react";


function Article({title,  preview}){
    const date = "January 1, 1970";
    return (
        <main>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </main>

    )
}

export default Article;