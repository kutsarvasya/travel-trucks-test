# Camper Rental App

The application allows users to browse, filter, and book campervans.

---

## 🛠 Technologies Used

- **React**
- **React Router DOM**
- **Redux Toolkit**
- **Redux Persist**
- **Formik**
- **React Datepicker**
- **Axios**
- **React Toastify**
- **CSS Modules**

---

## 📌 Functionality

### 🏠 Home Page

- Introductory page with general information

### 📋 Catalog Page

- List of available campervans
- Pagination using “Load more” button
- Ability to add/remove campers to **Favorites**
- Data loading indicator (Loader)

### 🔍 Filtering

- Filter by location (city, country)
- Filter by vehicle type
- Filter by equipment:
  - AC
  - Kitchen
  - TV
  - Bathroom
  - Microwave
  - Gas
  - Water
- Filters are stored in Redux

### 📄 Camper Details Page

- Detailed camper information
- Tabs navigation:
  - **Features**
  - **Reviews**

### ⭐ Reviews

- Display of user reviews
- Rating visualization with stars

### 📅 Booking Form

- Booking form built with **Formik**
- Date selection via **react-datepicker**
- Required field validation
- Error messages display

### ❤️ Favorites

- Ability to add campers to favorites
- Favorites are persisted in `localStorage`

### ⚠️ Error Handling

- API errors are displayed using **react-toastify**

---

## 🧭 Routing

- `/` — Home page
- `/catalog` — Catalog page
- `/catalog/:id` — Camper details page
  - `/catalog/:id` — Features tab
  - `/catalog/:id/reviews` — Reviews tab

---

## 🚀 How to Run the Project

1️⃣ Install dependencies:

```bash
npm install
```

2️⃣ Start the development server:

```bash
npm run dev
```
