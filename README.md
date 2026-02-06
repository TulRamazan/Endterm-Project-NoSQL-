---

## ⚙️ Technologies Used

- **Node.js** – backend runtime environment  
- **Express.js** – REST API framework  
- **MongoDB** – NoSQL database  
- **MongoDB Compass** – database visualization and testing  
- **HTML / CSS / JavaScript** – frontend  
- **GitHub** – version control and project hosting  

---

## 🗄 Database Design

The application uses the **Airbnb dataset** stored in MongoDB.  
The database structure is designed to efficiently support analytical queries and filtering.

Main collections include:
- `listingsAndReviews` – Airbnb listings with prices, location, amenities, and reviews  

Indexes are applied to frequently queried fields (such as price, location, and ratings) to improve query performance.

---

## 🔗 Backend & REST API

The backend is implemented using **Node.js** and **Express** and follows RESTful design principles.

Main features:
- CRUD operations for Airbnb listings  
- Analytical queries using MongoDB aggregation pipelines  
- Filtering and sorting by price, rating, and location  
- Pagination support for large datasets  
- Proper database connection handling  

---

## 🌐 Frontend

The frontend provides a simple web interface that allows users to:
- View Airbnb listings  
- Apply filters and sorting  
- Analyze pricing and review statistics  

The frontend communicates with the backend via REST API endpoints.

---

## 📊 Bonus Features Implemented

The project includes additional architectural and engineering solutions beyond the core requirements:

### 1️⃣ ACID Transactions
- MongoDB transactions are used to ensure data consistency during multi-step operations  
- All related operations either complete successfully or rollback in case of failure  

### 2️⃣ Pagination, Filtering, and Sorting Standards
- Pagination implemented using `limit` and `skip`  
- Filtering by price range, ratings, and other attributes  
- Sorting supported for key fields (e.g., price, rating)  

These improvements enhance scalability, performance, and usability of the system.

---

## 📄 Documentation

The documentation includes:
- Project overview and architecture description  
- Database design explanation  
- Backend and API description  
- Bonus feature explanation  
- Work distribution details  

---

## 👤 Work Distribution

**This project was developed individually.**

**Student:** Tulentay Ramazan  
**Group:** BDA-2407  

Responsibilities:
- Designed MongoDB database schema and data model  
- Implemented backend logic using Node.js and Express  
- Developed REST API endpoints  
- Integrated MongoDB with backend services  
- Implemented aggregation queries and pagination  
- Developed frontend interface  
- Debugged, tested, and finalized the project  
- Prepared project documentation  

---

## ✅ Project Status

✔ Core MongoDB and backend requirements are fully satisfied  
✔ Frontend implemented and connected to backend  
✔ Bonus features added  
✔ Project ready for demonstration and evaluation  

---

## 📌 Conclusion

This project demonstrates practical usage of **MongoDB** in a real-world analytical web application, combining backend logic, database design, and frontend interaction in accordance with the course requirements.
