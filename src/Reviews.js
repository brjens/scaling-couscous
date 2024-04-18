import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const Reviews = () => {
    
const { data, loading, error } = useFetch('http://localhost:3001/reviews');
const [reviews, setReviews] = useState([]);

useEffect(() => {
    if (data){
        setReviews(data);
    }
}, [data]);

return ( 
        <div>
            {reviews.map((review) => (
                <div key={review.id}>
                    <h1>{review.name}</h1>
                    <h2>Stars: {review.stars}</h2>
                    <h3>Date posted: {review.date}</h3>
                    <p>{review.text}</p>
                    <br />
                </div>
            ))}  
        </div>

     );
}
 
export default Reviews;