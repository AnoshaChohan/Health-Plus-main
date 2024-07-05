import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import doctorImage from '../Assets/3.jpeg';
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={doctorImage} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose AMH</span>
        </h3>
        <p className="ba-description">
          Discover the reasons to choose AMH for your healthcare needs.
          Experience expert care, convenience, and personalized solutions,
          making your well-being our top priority. Join us on a journey to
          better health and a happier life.
        </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#1E8FFD" }} /> Best Professional Doctors
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#1E8FFD" }} /> Emergency Care
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#1E8FFD" }} /> 24/7 Support Live Chat
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCalendarCheck} style={{ color: "#1E8FFD" }} /> Enrollment Easy and Quick
        </p>

        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} className="fa-calendar-check" /> Book Appointment
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
