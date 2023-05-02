import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Fina } from "./style";
import comentarios from "../components/Comments/index";
import Assistido from "../components/Buttonsign/assistido";
import Title from "../components/Title";


function Details() {
    const { id } = useParams();
    const [movies, setMovies] = useState({});
    const [data, setData] = useState(false);
    const [notFound, setNotFound] = useState(false);


    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marycamila184/moviedetails/moviedetails/${id}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.length === 0) {
                    setNotFound(true);
                } else {
                    setMovies(data);
                    setData(true);
                }
                
            });
    }, [id]);

    if (!data) {
        return <p>Carregando...</p>;
    }
    else if (!movies.id || notFound) {
        return (
          <>
            <p>Filme não encontrado.</p>
            <Link to="/">
              <button>Voltar</button>
            </Link>
          </>
        );
      }


    const handleAssistidoClick = (id) => {
        setMovies((prevState) => ({
            ...prevState,
            assistido: !prevState.assistido
        }));
    };

    return (

        <div>
            <Fina>
            <Title
                        title={"Detalhes"}
                        />
            </Fina>
            {movies ? (
                <Container>
                    <div className="movies">
                        <img src={movies.poster} alt={movies.titulo} />
                        <div className="details">
                            <h1>Título original: {movies.titulo}</h1>
                            <span> Ano: {movies.ano}</span>
                            <span> Nota: Nota não consta na API.</span>
                            <span> Sinopse: {movies.sinopse}</span>
                            <br />

                     
                            <Assistido
                                assistido={movies.assistido}
                                onClick={handleAssistidoClick}
                                id={movies.id}
                            />
                            <br />
                            <Link to="/">
                                <button>Voltar</button>
                            </Link>
                        </div>
                    </div>

                 
                    <Fina>
                        <div>
                        <comentarios />
                            {comentarios.length > 0 ? (
                                comentarios.map((comentario) => {
                                    if (comentario.id_filme === movies.id) {
                                        return (
                                            <div key={comentario.id}>
                                                <p>
                                                    <strong>{comentario.usuario}:</strong>{" "}
                                                    {comentario.texto}
                                                </p>
                                            </div>
                                        );
                                    } else {
                                        return null;
                                    }
                                })
                            ) : (
                                <p>Sem comentários para esse filme.</p>
                            )}
                        </div>
                    </Fina>
                </Container>
            ) : (
                <p>Filme não encontrado.</p>
            )}
        </div>
    );
}

export default Details;
