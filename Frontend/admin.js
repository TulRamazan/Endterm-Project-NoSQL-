// 1. Add listing
document.getElementById("addForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const amenities = document.getElementById("amenities").value.split(",").map(item => item.trim());

    try {
        const response = await fetch('http://localhost:3000/api/listings', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, amenities })
        });

        if (response.ok) {
            alert("Listing added successfully!");
            location.reload(); // Restarting to see the updated list
        }
    } catch (err) {
        console.error(err);
        alert("Error adding listing");
    }
});

// 2. Delete listing
async function removeListing() {
    const id = document.getElementById("deleteId").value;
    if (!id) return alert("Please enter an ID");

    if (!confirm("Are you sure you want to delete this?")) return;

    try {
        const response = await fetch(`http://localhost:3000/api/listings/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert("Listing deleted");
            location.reload();
        } else {
            alert("Listing not found or error occurred");
        }
    } catch (err) {
        console.error(err);
        alert("Error deleting listing");
    }
}

