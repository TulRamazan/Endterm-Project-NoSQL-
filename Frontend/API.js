const API_URL = "http://localhost:3000/api/listings";

async function getListings() {
  const response = await fetch(API_URL);
  return response.json();
}

async function getListingById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function addListing(data) {
  return fetch(`${API_URL}/add`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}

async function deleteListing(id) {
  return fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });
} 

async function getListings() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch listings");
    return await response.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

async function getListingById(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) throw new Error("Failed to fetch listing by ID");
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function addListing(data) {
  try {
    const response = await fetch(`${API_URL}/add`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    if (!response.ok) throw new Error("Failed to add listing");
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

async function deleteListing(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    if (!response.ok) throw new Error("Failed to delete listing");
    return await response.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

