import { useEffect, useState } from "react";

const Reviews = () => {

//add a function to find the average review
const [averageRating, setAveragerating] = useState(0);
const [reviews, setReviews] = useState([]);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
    setTimeout(() => {
        fetch('http://localhost:3001/reviews')
        .then(res => {
            if (!res.ok) {
                throw Error('could not fetch the data for that resource');
            }
        return res.json();
        })
        .then(data => {
            console.log(data);
            setReviews(data);
            setLoading(false);
            setError(null);
        })
        .catch(error => {
            setLoading(false);
            setError(error);
        })
    }, 2000);
}, []);

useEffect(() => {
    setAveragerating(average(reviews));
}, [reviews]);
const average = (reviews) => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].stars;
    }
    return sum / reviews.length;
}

const numOfReviews = (reviews) => {
    return reviews.length;
}
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
    {/* Display the number of reviews */}
        {error && <div>{error.message}</div>}
        {loading ? (<p> Loading...</p>) : (<p>Reviews: {numOfReviews(reviews)}</p>)}
    {/* Display the StarRating component with the average rating */}
        <StarRating rating={averageRating} />
    </nav>
     );
}
 
export default Reviews;