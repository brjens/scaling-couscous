import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const Reviews = () => {

//add a function to find the average review
const [averageRating, setAveragerating] = useState(0);
const [reviews, setReviews] = useState([]);
const { data, loading, error } = useFetch('http://localhost:3001/reviews');

useEffect(() => {
    if (data){
        setReviews(data);
        setAveragerating(average(reviews));
    }
}, [data]);

const handleButtonClick = (event) => {        
    window.location.href = event.target.href;
}

const average = (reviews) => {
    if (reviews.length === 0) return 0;
    console.log(reviews);
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
        sum += reviews[i].stars;
    }
    return sum / reviews.length;
}

const numOfReviews = (reviews) => {
    return (
       <a href={"/reviews"} onClick={handleButtonClick}>
        {reviews.length}
       </a>
    );
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