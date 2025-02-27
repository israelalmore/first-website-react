interface CardProps {
  titulo: string;
  subtitulo: string;
}
function Card({ titulo, subtitulo }: CardProps) {
  return (
    <div className="card">
      <h1> {titulo}</h1>
      <p> {subtitulo} </p>
    </div>
  );
}

export default Card;
