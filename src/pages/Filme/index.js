import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [laoding, setLoading] = useState(true);

  useEffect(() => {
    async function loadfilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "8761c57d71624a34dcc17a72b9b1ae49",
            language: "pt-BR",
            page: 1,
          },
        })
        .then((response) => {
          setFilme(response.data); // Colocar os dados no useState
          setLoading(false);
          //console.log(response.data);
        })
        .catch(() => {
          console.log("Filme não encontrado");
        });
    }
    loadfilme();

    return () => {
      console.log("Componente foi descmotado");
    };
  }, []);

  if (laoding) {
    return (
      <div className="filme-info">
        <h2>Carregando detalhes...</h2>
      </div>
    );
  }
  return (
    <div className="filme-info">
      <h1>{filme.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`}
        alt={filme.title}
        width="70%"
      />
      <h3>Sinopse</h3>
      <span>{filme.overview}</span>
      <strong>Avalição: {filme.vote_average} / 10</strong>
    </div>
  );
}

export default Filme;
