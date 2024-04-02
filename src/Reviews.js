const Reviews = () => {

//add a function to find the average review
const averageRating = 2;

const Star = ({ filled }) => {
    return (
        <span style={{ color: filled ? 'gold' : 'lightgrey' }}>
            {filled ? '★' : '☆'}
        </span>
    );
};

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        stars.push(<Star key={i} filled={i < rating} />);
    }
    return <div className="stars">{stars}</div>;
};

return ( 
    <nav>
    {/* Display the StarRating component with the average rating */}
        <StarRating rating={averageRating} />
    </nav>
     );
}
 
export default Reviews;