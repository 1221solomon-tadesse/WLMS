import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about">
        <h1 className="about-title">About Our Library Management System</h1>
        <p className="about-description">
          Welcome to our Library Management System, designed to streamline the process of borrowing and managing books in a library. Our system is developed with the aim of making book management efficient, user-friendly, and accessible to both library staff and users.
        </p>
        <p className="about-description">
          <strong>Key Features:</strong>
          <ul>
            <li><strong>Easy Book Browsing:</strong> Users can easily search for books by title, author, or genre.</li>
            <li><strong>Borrowing Requests:</strong> Users can request to borrow books and view the status of their requests.</li>
            <li><strong>Admin Dashboard:</strong> Library admins can manage books, review borrowing requests, and handle user accounts.</li>
            <li><strong>Responsive Design:</strong> The system is designed to work seamlessly across all devices, from desktop to mobile.</li>
          </ul>
        </p>
        <p className="about-description">
          Our goal is to provide a robust and scalable solution that caters to the needs of modern libraries. We continually strive to improve our system and welcome feedback from our users to enhance their experience.
        </p>
        <p className="about-description">
          If you have any questions or need assistance, feel free to contact our support team. Thank you for choosing our Library Management System!
        </p>
      </div>
    </div>
  );
}

export default About;
