interface CardProps {
  titulo: string;
  subtitulo: string;
}
function Card({ titulo, subtitulo }: CardProps) {
  return (
    <div className="card">
      <h1> {titulo}</h1>
      <h2> {subtitulo} </h2>
    </div>
  );
}

export default Card;
