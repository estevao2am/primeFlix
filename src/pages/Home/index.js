import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./home.css";

function Home() {
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "8761c57d71624a34dcc17a72b9b1ae49",
          language: "pt-BR",
          page: 1,
        },
      });
      console.log(response.data.results.slice(0, 10));
      setFilme(response.data.results.slice(0, 10));
    }
    loadFilmes();
  }, []);
  return (
    <div className="container">
      <div className="lista-filmes">
        {filme.map((item) => {
          return (
            <article key={item.id}>
              <strong> {item.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={filme.title}
              />
              <Link to={`/filme/${item.id}`}> Acessar</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
