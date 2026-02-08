document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const container = document.getElementById("listing-details");

    if (!id) {
        container.innerHTML = "<h2>Error: No ID provided</h2>";
        return;
    }

    try {
        // Query to the server
        const response = await fetch(`http://localhost:3000/api/listings/${id}`);
        
        if (!response.ok) throw new Error("Server responded with error");

        const data = await response.json();

        // Draw data to the container with the details-card class
        container.innerHTML = `
            <div class="details-card">
                <h2>${data.name || "No Name"}</h2>
                <p class="price">Price: <strong>$${data.price || "N/A"}</strong></p>
                <div class="meta">
                    <p><strong>Room Type:</strong> ${data.room_type || "Standard"}</p>
                    <p><strong>Amenities:</strong> ${data.amenities?.join(", ") || "None"}</p>
                </div>
                <hr>
                <p class="summary">${data.summary || "No description available."}</p>
            </div>
        `;
    } catch (error) {
        console.error(error);
        container.innerHTML = `
            <div class="error-msg">
                <h2>Error loading data</h2>
                <p>1. Make sure <strong>node server.js</strong> is running.</p>
                <p>2. Check if MongoDB is connected.</p>
            </div>
        `;
    }
});

