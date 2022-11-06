import { useState, useEffect } from "react";

import Fade from "react-reveal/Fade";

import MainLayout from "../src/layouts/MainLayout";
import ContactUs from "../src/components/ContactUsForm/ContactUs";

import axios from "axios";
import { viewLandingPageURL, viewContactURL } from "../Utils/constants";

import styles from "../styles/Home.module.scss";

const Card = ({ item }) => {
  return (
    <div className={styles.card}>
      <img src={item.link} alt="icons" className={styles.cardIcon} />
      <h1 className={styles.cardTitle}>{item.title}</h1>
      <p className={styles.cardDesc}>{item.desc}</p>
    </div>
  );
};

const ServiceCard = ({ item, handleOpenContact }) => {
  return (
    <div className={styles.serviceCard}>
      <img src={item.link} alt="icons" className={styles.serviceCardIcon} />

      <div className={styles.serviceCardCont}>
        <h1 className={styles.serviceCardTitle}>{item.title}</h1>
        {/* <p className={styles.serviceCardDesc}>{item.desc}</p> */}
        <button className={styles.contactNow} onClick={() => handleOpenContact(item.title)}>
          Raise Query
        </button>
      </div>
    </div>
  );
};

export default function Home({ posts }) {
  const [openContactForm, setOpenContactForm] = useState(false);
  const [contactMessage, setContactMessage] = useState("");

  useEffect(() => {
    axios
      .post(viewLandingPageURL)
      .then((res) => {})
      .catch((err) => {});
  }, []);

  const handleOpenContact = (message = "") => {
    console.log(message)
    setContactMessage(message);
    setOpenContactForm(true);
  };

  const serviceCardDetail = [
    {
      title: "LED and LCD Based Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/led.jpeg",
    },
    {
      title: "Seven Segment Display Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/7segment.jpeg",
    },
    {
      title: "Temprature Display Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/temprature.jpeg",
    },
    {
      title: "Clock and Timer Display",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/clock.jpeg",
    },
    {
      title: "IR Based On/Off Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/relay.jpeg",
    },
    {
      title: "Automatic Relay Control",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/relaycontrol.jpeg",
    },
    {
      title: "Dimming X-Ray light & Timer On/Off Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/dimingled.jpeg",
    },
    {
      title: "Microcontroller Based Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/microcontroller.jpeg",
    },
    {
      title: "Touch and Touchless Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/touchswitch.jpeg",
    },
    {
      title: "RS232, RS485 Communication Devices",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/rs232.jpeg",
    },
    {
      title: "Keypad",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/keypad.jpeg",
    },
    {
      title: "Digital Sensor Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/products/sensor.jpeg",
    },
  ];

  return (
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.row}>
          <img src="/images/home.jpg" alt="" className={styles.mainImg} />

          <div className={styles.right}>
            <Fade right>
              <h1 className={styles.title}>
                We Provide Customized Embedded Solutions
              </h1>

              <p className={styles.desc}>
                Our team of experienced engineers will develop highly efficient
                embedded solutions for you.
              </p>

              <button className={styles.seeMore} onClick={() => handleOpenContact("General")}>
                Connect With Us
              </button>
            </Fade>
          </div>
        </div>

        <div className={styles.commitmentDiv} id="services">
          <h1 className={styles.divTitle}>Our Projects</h1>
          <p className={styles.divDesc}>
            We have experience in wide range of embedded projects and have
            provided excellent service. Our projects of expertise include
          </p>

          <Fade bottom>
            <div className={styles.cardCont}>
              {serviceCardDetail.map((item, key) => (
                <ServiceCard
                  item={item}
                  key={key}
                  handleOpenContact={handleOpenContact}
                />
              ))}
            </div>
          </Fade>
        </div>

        {/* <div className={styles.contactNumber}>
          <div className={styles.ele}>Contact Number : +91 9811996716</div>

          <div className={styles.ele}>Email Id : tariyallv@gmail.com</div>
        </div> */}

        <Fade bottom>
          <div className={styles.contactUs} id="contactUs">
            <div className={styles.right}>
              <h1 className={styles.contactTitle}>Have a query ?</h1>
              <p className={styles.contactMessage}>
                We are just a call away.
                <br />
                <br /> Contact Number : +91 9811996716
              </p>
              <button
                className={styles.contactButton}
                onClick={() => handleOpenContact("General")}
              >
                Raise a query
              </button>
            </div>
            <img src="/images/mailbox.svg" className={styles.contactUsImage} />
          </div>
        </Fade>
      </div>

      <ContactUs
        open={openContactForm}
        handleClose={() => setOpenContactForm(false)}
        defaultMessage={contactMessage}
      />
    </MainLayout>
  );
}
