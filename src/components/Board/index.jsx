export default function Board({ squares, onClick }) {
  return (
    <ul className="board">
      {squares.map((square, index) => (
        <li key={index} onClick={() => onClick(index)}>
          {square}
        </li>
      ))}
    </ul>
  );
}
