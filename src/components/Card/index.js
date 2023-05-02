import "./card.css";
import Assistido from "../Buttonsign/assistido";

export default function Card(props) {
  return (
    <div className="container text-center">
      <div className="row">
        {props.movies.map((filme) => (
          <div className="col" key={filme.id}>
            <div className="card">
              <img src={filme.poster} alt={filme.titulo} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{filme.titulo} ({filme.ano}) </h5>
                <p>Sinopse</p>
                <p className="card-text">{filme.nota}</p>
                <a
                  href={`./detalhes/${filme.titulo}`}
                >
                  <div>
                    <Assistido assistido={filme.assistido} />
                  </div>
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}