import React, { useState, useEffect } from 'react';
import Card from './components/Card';

function Carregarpost() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [info, setInfo] = useState({});

  const api = 'https://my-json-server.typicode.com/marycamila184/movies/movies';
  // const [searchMovies, setSearchMovies] = useState([]);
  // const [text,setText] = useState("");
  // const [select, setSelect] =useState("titulo");

  useEffect(() => {
    if (search) {
      setInfo({});
    fetch(`${api}`)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(error => console.error(error));
    }
    }, []);


// function Buscar() {
//   const nome = [];
//   console.log(text)
//   if(text == ""){
//     setSearchMovies(movies);
//   }
//   else {
//     movies.forEach(movie =>{if (movie.titulo.includes(text)){
//       nome.add(movie)
//     }})
//     setSearchMovies(nome)
//   }
//   console.log(searchMovies)
// }

// function Ordenar(tipo) {
//   const qualquer = "";
//   if(tipo != "titulo") {
//     movies.sort(function(x, y){
//       if (x.ano < y.ano) return -1;
//       if (x.ano > y.ano) return 1;
//       return 0; 
//     })
//     console.log(movies)
//   }
// }


  return (
    // <>
    // <div>
    //       <label for="exampleInputEmail1">Barra de pesquisa</label>
    //       <input onChange={(e) => setText(e.value)} onKeyDown={()=>Buscar()} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    //       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    //     </div>

    //     <div>
    //       <h1>
    //           v
    //       </h1>
    //       <div>
    //         <button onClick={()=>Ordenar("titulo")}>Título</button>
    //         <button onClick={()=>Ordenar("ano")}>Ano</button>
    //         <button onClick={()=>Ordenar("nota")}>Nota</button>
    //       </div>
    //     </div>
        

    <div className="card-container">
      <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
      {search && !info.data && <span>Carregando...</span>}
      {/* {info.data && (
        <ul className="animes-list">
          {info.data.map((anime) => (
            <li key={anime.id}>
              <img
                src={anime.attributes.posterImage.small}
                alt={anime.attributes.canonicalTitle}
              />
              {anime.attributes.canonicalTitle}
            </li>
          ))}
        </ul>
      )}  */}
      <Card movies={movies}/>
    </div>
    // </>
  );
}

export default Carregarpost;