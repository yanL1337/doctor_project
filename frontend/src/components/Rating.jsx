const Rating = ({ rating }) => {
  let count = Math.round(Number(rating));
  let stars = "";

  for (let i = 0; i < count; i++) {
    stars += "★";
  }

  for (let i = 0; i < 5 - count; i++) {
    stars += "☆";
  }

  return (
    <div className="text-yellow-300">
      <p>{stars}</p>
    </div>
  );
};

export default Rating;
