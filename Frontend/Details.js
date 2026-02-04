const ListingDetail = ({ match }) => {
    const [item, setItem] = useState(null);
    const [comment, setComment] = useState('');

    const handleAddReview = async () => {
        await API.post(`/listings/${item._id}/reviews`, { comment });
        alert('Review added!');
    };

    if (!item) return <p>Loading...</p>;

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <h3>Reviews:</h3>
            {item.reviews.map((r, i) => <p key={i}>{r.comment}</p>)}
            
            <textarea onChange={(e) => setComment(e.target.value)} />
            <button onClick={handleAddReview}>Submit Review</button>
        </div>
    );
};
