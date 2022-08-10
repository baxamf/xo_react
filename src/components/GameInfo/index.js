export default function GameInfo({ moves, status }) {
  return (
    <div className="info">
      <h2>{status}</h2>
      <ul>{moves}</ul>
    </div>
  );
}
