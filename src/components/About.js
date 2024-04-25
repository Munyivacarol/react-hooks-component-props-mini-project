import React from "react";

 const image ="https://via.placeholder.com/215"
function About({about}){
    return (
        
        <aside>
            <img src={image} alt="blog logo"/>
            <p>{about}</p>
        </aside>
    )
}


export default About;