import React from "react";
import DoctorCard from "./DoctorCard";

import profile1 from "../Assets/profile-1.png";
import profile2 from "../Assets/profile-2.png";
import profile3 from "../Assets/profile-3.png";
import profile4 from "../Assets/profile-4.png";
import "../Styles/Doctors.css";

const doctorData = [
  {
    name: "Dr. Shazia Tabassum Memon",
    title: "GYNAECOLOGIST/OBSTETRICIAN",
    stars: "4.9",
    reviews: "1800",
    img: '1.jpeg'
  },
  {
    name: "Dr. Shah Nawaz",
    title: "UROLOGIST",
    stars: "4.8",
    reviews: "700",
    img: '22.jpeg'
  },
  {
    name: "Dr. Seema Mehboob",
    title: "sonologist",
    stars: "4.7",
    reviews: "450",
    img: '20.jpeg'
  },
  {
    name: "Dr. Raheela Imtiaz",
    title: "GYNAECOLOGIST/OBSTETRICIAN",
    stars: "4.5",
    reviews: "232",
    img: '19.jpeg'
  },
  {
    name: "Dr. Qaiser Sajjad",
    title: "ENT Specialist",
    stars: "4.6",
    reviews: "312",
    img: '21.jpeg'
  },
  {
    name: "Dr. Parveen Azam",
    title: "GYNAECOLOGIST/OBSTETRICIAN",
    stars: "4.8",
    reviews: "231",
    img: '17.jpeg'
  },
  {
    name: "Dr. Muhammad Anwar",
    title: "Pediatric Surgeon",
    stars: "4.7",
    reviews: "123",
    img: '18.jpeg'
  },
  {
    name: "Dr. Misbah Ur Rehman",
    title: "Dermatologist",
    stars: "4.9",
    reviews: "133",
    img: '15.jpeg'
  },
  {
    name: "Dr. Farha Idris",
    title: "General Surgeon",
    stars: "4.1",
    reviews: "231",
    img: '16.jpeg'
  },
  {
    name: "Dr. Aurangzaib",
    title: "Child specialist/ Peadiatrician",
    stars: "4.2",
    reviews: "312",
    img: '14.jpeg'
  },
  {
    name: "Prof.Dr, Subhana  Tayyab",
    title: "GYNAECOLOGIST/OBSTETRICIAN",
    stars: "4.3",
    reviews: "231",
    img: '2.jpeg'
  },
  {
    name: "Dr. Asif Naseem",
    title: "Chest Specialist",
    stars: "4.4",
    reviews: "141",
    img: '4.jpeg'
  },
  {
    name: "Dr. Amir Hussain",
    title: "Chest Specialist/Pediatrician",
    stars: "4.5",
    reviews: "323",
    img: '6.jpeg'
  },
  {
    name: "Dr. Hamid Ali Kalwar",
    title: "Gastroentrologist",
    stars: "4.6",
    reviews: "240",
    img: '8.jpeg'
  },
  {
    name: "Prof. Dr. Gulam Mustafa",
    title: "Prthopedic Surgeon",
    stars: "4.7",
    reviews: "200",
    img: '12.jpeg'
  },

  // Add more doctor data objects here as needed
];

const Doctors = () => {
  return (
    <div className="doctor-section" id="doctors">
      <div className="dt-title-content">
        <h3 className="dt-title">
          <span>Meet Our Doctors</span>
        </h3>
        <p className="dt-description">
          Meet our exceptional team of specialist doctors, dedicated to providing top-notch healthcare services at Health Plus. Trust in their knowledge and experience to lead you towards a healthier and happier life.
        </p>
      </div>

      <div className="dt-cards-content">
        {doctorData.map((doctor, index) => (
          <DoctorCard
            key={index}
            img={require(`../Assets/${doctor.img}`)}
            name={doctor.name}
            title={doctor.title}
            stars={doctor.stars}
            reviews={doctor.reviews}
          />
        ))}
      </div>
    </div>
  );
}

export default Doctors;