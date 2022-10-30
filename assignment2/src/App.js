import { GithubOutlined } from '@ant-design/icons';
import './App.css';
import './myStyle.css';
import Movie from './Movie';

	
  const MovieList = [
    {
      title:"The Godfather",
      year:"1972",
      genre:"Drama",
      director:"Francis Ford Capolla"
    },
    {
      title:"Superbad",
      year:"2007",
      genre:"Comedy",
      director:"Greg Mottola"
    },
    {
      title:"The Departed",
      year:"2006",
      genre:"Drama",
      director:"Martin Scorsese"
    },
    {
      title:"Saving Private Ryan",
      year:"1998",
      genre:"Action",
      director:"Steven Spielberg"
    },
    {
      title:"The Expendables",
      year:"2010",
      genre:"Action",
      director:"Sylvester Stallone"
    }
    ]

function App() {
  return (
    <div className="App">
        <h1><i><GithubOutlined /> Mohammed Qaasim Desai Assignment 2</i></h1>
        <hr></hr>

      {MovieList.map(
        (m)=>{return(<Movie title={m.title} year={m.year} genre={m.genre} director={m.director}/>)}
      )}


    </div>
  );
}

export default App;
