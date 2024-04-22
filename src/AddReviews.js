
import React, { useState } from 'react';

    const AddReview = () => {
        const [formData, setFormData] = useState({
            name: '',
            review: '',
            stars: 0
        });

        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: value
            }));
        };

        const handleSubmit = (event) => {
            event.preventDefault();
            console.log('Submitting review:', formData);
            setFormData({ name: '', review: '', stars: 0 });
        };

        return (
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <br />

                <label>
                    Review:
                    <textarea
                        name="review"
                        value={formData.review}
                        onChange={handleInputChange}
                    />
                </label>
                <br />

                <label>
                    Stars:
                    <input
                        type="number"
                        name="stars"
                        min="1"
                        max="5"
                        value={formData.stars}
                        onChange={handleInputChange}
                    />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form>
        );
    };

export default AddReview;