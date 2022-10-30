import React, {useState} from "react";

export default function Movie(props){

    const [age, setAge] = useState(2022-props.year)

    return(
        <div>
            
            <h2>Movie Name: {props.title}</h2>
            <h2>Year: {props.year}</h2>
            <h2>Genre: {props.genre}</h2>
            <h2>Director: {props.director}</h2>
            <h2>Movie Age: {age}</h2>
            <hr></hr>
        </div>
    )
}