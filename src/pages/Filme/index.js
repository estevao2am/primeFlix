import { useParams } from "react-router-dom";

function Filme() {
  const { id } = useParams();
  return (
    <div>
      <h1>Filmes: {id}</h1>
    </div>
  );
}

export default Filme;
