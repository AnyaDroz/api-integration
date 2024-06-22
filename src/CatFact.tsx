import {useState} from "react";

export const CatFact = () => {

    fetch("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

        })
        .catch((error) => {
            console.error('Error fetching cat fact:', error);
        });
return (<div></div>)

}