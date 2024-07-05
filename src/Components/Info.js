import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
          We bring healthcare to your convenience, offering a comprehensive
          range of on-demand medical services tailored to your needs. Our
          platform allows you to connect with experienced online doctors who
          provide expert medical advice, issue online prescriptions, and offer
          quick refills whenever you require them.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Emergency Care"
          description="Our Emergency Care service is designed to be your reliable support
            in critical situations. Whether it's a sudden illness, injury, or
            any medical concern that requires immediate attention, our team of
            dedicated healthcare professionals is available 24/7 to provide
            prompt and efficient care."
          icon={faTruckMedical}
        />

        <InformationCard
          title="Heart Disease"
          description="Our team of experienced cardiologists and medical experts use
            state-of-the-art technology to assess your cardiovascular health and
            design personalized treatment plans. From comprehensive screenings
            to advanced interventions, we are committed to helping you maintain
            a healthy heart and lead a fulfilling life."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Dental Care"
          description="Smile with confidence as our Dental Care services cater to all your
            oral health needs. Our skilled dentists provide a wide range of
            treatments, from routine check-ups and cleanings to cosmetic
            procedures and restorative treatments."
          icon={faTooth}
        />

<InformationCard
          title="Operation Theater"
          description="There are two fully equipped and well staffed opertaion theatres available next door to 
          to intensive care unit and labour rooms thus providing centrally organised availablitity"
          icon={faTooth}
        />

<InformationCard
          title="children OPD"
          description="A specail OPD for childern is located next to NICU, manned by nurses and doctors round the clock. Since,
          its incepction the OPD is proved of great help to scores of children which need immediate medical attaention while the Gp;sare not available "
          icon={faTooth}
        />


<InformationCard
          title="Pharmacy"
          description="Pharmacy witha staff of more than 15 people provides service to outdoor and indoorpateints 24 hour of the day"
          icon={faTooth}
        />

<InformationCard
          title="Laboratory"
          description="Loaboratory is the backbone of a hospital , hence there is always a need for a modern loboratory which is indoors.
          Labs are biggest revenue generators but AMH has overlooked this essential source of income for the sake of availablitiy and reliable loboratory"
          icon={faTooth}
        />

<InformationCard
          title="Ultrasound"
          description="There are four ultrasound specialities, 3 feamles, and 1 make providing services to outdoor and indoor patients."
          icon={faTooth}
        />

      </div>
    </div>
  
  );
}

export default Info;
