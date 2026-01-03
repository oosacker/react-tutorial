function Card({ myEvent }) {
  const handleClick = () => {
    if (myEvent) {
      myEvent({ data: "some value" });
    }
  };

  return (
    <div className="card">
      <button onClick={handleClick}>Button one</button>
    </div>
  );
}

export default Card;
