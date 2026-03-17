import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Favoritos() {
  const [filme, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@Filmes");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);
  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      <ul>
        {filme.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
