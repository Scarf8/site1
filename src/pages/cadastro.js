import React, { useState } from 'react';
import Title from './../components/Title/index';
import Buttonsign from '../components/Buttonsign/buttonsign';



export default function Cadastro() {

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [nomecartao, setNomeCartao] = useState('');
    const [numcartao, setNumCartao] = useState('');
    const [cvc, setCvc] = useState('');

    function handleNomeChange(event) {
        setNome(event.target.value);
    }  
    
    function handleTelefoneChange(event) {
        setTelefone(event.target.value);
    }

    function handleEnderecoChange(event) {
        setEndereco(event.target.value);
    }

    function handleNomeCartaoChange(event) {
        setNomeCartao(event.target.value);
    }

    function handleNumCartaoChange(event) {
        setNumCartao(event.target.value);
    }

    function handleCvcChange(event) {
        setCvc(event.target.value);
    }

    return (

        <div className="container">
          <div className="mt-5 text-center">
          <Title
                        title={"Cadastro de conta"}
                        />
          </div>
          <div className="row mt-5">
            <div className="col">
              <div>
                <div className="mt-3">
                  <label> Dados do Assinante </label>
                </div>
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Name:</label><br />
                <input class="form-control" placeholder="Nome Completo" id="nameInput" type="text" value={nome} onChange={handleNomeChange} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Telefone:</label><br />
                <input class="form-control" placeholder="Telefone" id="TelefoneInput" type="number" value={telefone} onChange={handleTelefoneChange} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Endereço:</label><br />
                <input class="form-control" placeholder="Endereço" id="EnderecoInput" type="text" value={endereco} onChange={handleEnderecoChange} /> <br />
              </div>
            </div>
    
            
            <div className="col">
              <div className="mt-3">
                <label> Dados do Cartão </label>
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Nome do Cartão:</label><br />
                <input class="form-control" placeholder="Nome do cartão" type="text" value={nomecartao} onChange={handleNomeCartaoChange} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="nameInput">Número do Cartão:</label><br />
                <input className="form-control" placeholder="Número do cartão"  type="text" maxLength={19} value={numcartao} onChange={handleNumCartaoChange} /> <br />
              </div>
              <div className="mt-3">
                <label htmlFor="NumerocvcInput">Número do CVC:</label><br />
                <input className="form-control" placeholder="Número do CVC" type="password" maxLength={3} value={cvc} onChange={handleCvcChange} /> <br />
              </div>
            </div>
          </div>
          <div>
    
            <div>
              <Buttonsign />
            </div>
            <div className="mt-5 text-center">
    
                  <button>Assinar</button>
                
            </div>
    
          </div>
        </div>
    
      );
    }