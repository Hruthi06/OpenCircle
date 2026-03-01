# OpenCircle ⭕

OpenCircle is a modern, professional social media application built with a **Spring Boot** backend and a high-performance, **Glassmorphism-styled** frontend.

## 🌟 Features

- **Premium UI/UX**: Ultra-modern dark mode design with fluid animations and a sleek, professional aesthetic.
- **Secure Authentication**: Robust JWT-based authentication system for secure login and registration.
- **Global Feed**: Real-time access to a unified feed where users can see posts from across the platform.
- **Post Creation**: Effortlessly share your thoughts with the community.
- **User Profiles**: Personal space to view your own contributions.
- **Responsive Design**: Fully optimized for various screen sizes.

## 🚀 Tech Stack

- **Frontend**: HTML5, Vanilla CSS3 (Custom Design System), JavaScript (ES6+).
- **Backend**: Java 17, Spring Boot 3.2.2, Spring Security, Spring Data JPA.
- **Database**: H2 (In-memory/File-based for portability).
- **Authentication**: JSON Web Tokens (JWT).

## 🛠️ Getting Started

### Prerequisites

- Java 17+
- Maven 3.6+
- Node.js (Optional, for advanced frontend tooling)

### Backend Setup

1. Navigate to the `backend` directory.
2. Run the application using Maven:
   ```bash
   mvn spring-boot:run
   ```
3. The server will start on `http://localhost:8097`.

### Frontend Setup

1. Simply open `frontend/index.html` in your favorite modern browser.
2. The frontend is pre-configured to communicate with the backend at port `8097`.

## 📂 Project Structure

```text
OpenCircle/
├── backend/            # Spring Boot application source code
│   └── src/main/java/com/socialapp/
│       ├── auth/       # Authentication & JWT Logic
│       ├── post/       # Post Management
│       └── user/       # User Management & Entities
└── frontend/           # Web interface
    ├── css/            # Premium Stylesheets
    ├── js/             # API & UI Logic
    └── *.html          # Application Pages
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License.
