document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("register-form");
    const container = document.getElementById("listings");
    const authContainer = document.getElementById("auth-container");

    authForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
        
            const response = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();

            if (response.ok) {
            
                localStorage.setItem('token', data.token);
                
                authContainer.style.display = 'none';
                
                loadListings();
            } else {
                alert("Auth failed: " + data.message);
            }
        } catch (err) {
            console.error("Login error:", err);
            alert("Connection error");
        }
    });


    async function loadListings() {
        container.innerHTML = "Loading...";
        const token = localStorage.getItem('token');

        try {
            const response = await fetch('http://localhost:3000/api/listings', {
                headers: { 'Authorization': token } 
            });

            if (!response.ok) throw new Error("Unauthorized");

            const listings = await response.json();
            container.innerHTML = ""; 

            listings.forEach(item => {
                const div = document.createElement("div");
                div.className = "card"; 
                div.innerHTML = `
                    <h3>${item.name}</h3>
                    <p>${item.address?.country || "Unknown country"}</p>
                    <button onclick="openDetails('${item._id}')">Details</button>
                `;
                container.appendChild(div);
            });
        } catch (error) {
            container.innerText = "Failed to load listings. Please login again.";
        }
    }
    if (localStorage.getItem('token')) {
        authContainer.style.display = 'none';
        loadListings();
    }
});

function openDetails(id) {
    window.location.href = `details.html?id=${id}`;
}
