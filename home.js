import React from 'react';
import Title from './../components/Title/index';
import Card from './../components/Card/index';
import Carregarpost from '../carregarpost';
import './home.css'
import { useState } from 'react';


function Home() {

    const [valor, setValue] = useState("");
    // const [search, setSearch] = useState("");

    // const searchLowerCase = search.toLowerCase();

    // const filmes = Carregarpost.filter({filmes} => card-title.toLoweCase().inclues(searchLowerCase));

    return (
        <div>
            <Title
                title={"Catálogo de Filmes"}/>
            {/* <input type="search" value={search} onChange={(e) => setSearch(e.target.value)}/> s */}
            <select name="value" value={valor} onChange={texto => setValue(texto.target.value)}>
                <option value="">Selecione</option>
                <option value="Titulo">Titulo</option>
                <option value="Ano">Ano</option>
                <option value="Nota">Nota</option>
            </select>
            {/* <Title title=""/> */}
            <Carregarpost />
        </div>
    )
}
export default Home;