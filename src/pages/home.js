import React from 'react';
import { Movie } from "../components/Style/styleMovie";
import { Link } from "react-router-dom";
import Assistido from '../components/Buttonsign/assistido';
import { useEffect } from "react";
import './home.css'
import { useState } from 'react';
import { Container, MovieList, OrderByContainer } from "../components/Style/style";
import Title from '../components/Title';


function Home() {


    const [searchTerm, setSearchTerm] = useState('');
    const [orderBy, setOrderBy] = useState('titulo');
    const [orderDirection, setOrderDirection] = useState('asc');
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => {
                console.error('Erro ao carregar filmes:', error);
            });
    }, []);

    const handleOrderByChange = (event) => {
        const [newOrderBy, newOrderDirection] = event.target.value.split(',');
        setOrderBy(newOrderBy);
        setOrderDirection(newOrderDirection);
    };



    const compareMovies = (a, b) => {
        let comparison = 0;
        if (orderBy === 'titulo') {
            comparison = a.titulo.localeCompare(b.titulo);
        } else if (orderBy === 'ano') {
            comparison = a.ano - b.ano;
        } else if (orderBy === 'nota') {
            comparison = a.nota - b.nota;
        }
        if (orderDirection === 'desc') {
            comparison *= -1;
        }
        return comparison;
    };

    const sortedMovies = [...movies].sort(compareMovies);

    const handleAssistidoClick = (id) => {
        setMovies(
            movies.map((movie) =>
                movie.id === id ? { ...movie, assistido: !movie.assistido } : movie
            )
        );
    };



    const handleSearchInputChange = (event) => {
        setSearchTerm(event.target.value);
    };



    return (
        <Container>
        <div>
            <OrderByContainer>
            <Title
                        title={"Catálogo de Filmes"}
                        />
                <div className="d-flex justify-content-between mr-md-1">
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="search">Pesquisar:</label>
                            <input type="text" id="search"className="form-control"value={searchTerm} onChange={handleSearchInputChange}/>
                        </div>
                    </div>
                    <div className="col-md-1">
                        <div className="form-group">
                            <label htmlFor="orderby">Ordenar por:</label>
                            <select id="orderby" className="form-control" value={`${orderBy},${orderDirection}`} onChange={handleOrderByChange}>
                                <option value="titulo,asc">Título (A-Z)</option>
                                <option value="titulo,desc">Título (Z-A)</option>
                                <option value="ano,asc">Ano antigo</option>
                                <option value="ano,desc">Ano recente</option>
                                <option value="nota,asc">Nota menor</option>
                                <option value="nota,desc">Nota maior</option>
                            </select>
                        </div>
                    </div>
                </div>
            </OrderByContainer>
            <MovieList>
                {sortedMovies.filter(movie => movie.titulo.toLowerCase().includes(searchTerm.toLowerCase())).map(movie => {
                    return (
                        <Movie key={movie.id}>
                            <Link to={`/detalhes/${movie.id}`}>
                                <img src={`${movie.poster}`} alt={movie.titulo} />
                            </Link>
                            <span>{movie.titulo}</span>
                            <span>Nota: {movie.nota}</span>
                            <Assistido
                                assistido={movie.assistido}
                                onClick={handleAssistidoClick}
                                id={movie.id}
                            />
                        </Movie>
                    );
                })}
            </MovieList>
            
        </div>

        </Container>
        
    )
}
export default Home;