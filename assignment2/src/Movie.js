import React, {useState} from "react";
import { PlaySquareOutlined } from '@ant-design/icons';
import './myStyle.css';



export default function Movie(props){

    const [age, setAge] = useState(2022-props.year)

    return(
        <div class='data'>            
            <h2><PlaySquareOutlined />  Movie Name: <i>{props.title}</i></h2>
            <h2>Year: <i>{props.year}</i></h2>
            <h2>Genre: <i>{props.genre}</i></h2>
            <h2>Director: <i>{props.director}</i></h2>
            <h2>Movie Age: <i>{age}</i></h2>
            <hr></hr>
        </div>
    )
}