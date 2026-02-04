import React, { useEffect, useState } from 'react';
import { fetchListings } from './api';

const Home = () => {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        fetchListings().then(({ data }) => setListings(data));
    }, []);

    return (
        <div className="container">
            <h1>Airbnb Listings</h1>
            <div className="grid">
                {listings.map((item) => (
                    <div key={item._id} className="card">
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                        <button onClick={() => window.location.href=`/listing/${item._id}`}>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
