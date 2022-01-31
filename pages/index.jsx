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
        <button className={styles.contactNow} onClick={handleOpenContact}>
          Contact Now{" "}
        </button>
      </div>
    </div>
  );
};

export default function Home({ posts }) {
  const [openContactForm, setOpenContactForm] = useState(false);

  useEffect(() => {
    axios
      .post(viewLandingPageURL)
      .then((res) => {})
      .catch((err) => {});
  }, []);

  const handleOpenContact = () => {
    axios
      .post(viewContactURL)
      .then((res) => {})
      .catch((err) => {});

    setOpenContactForm(true);
  };

  const serviceCardDetail = [
    {
      title: "LED and LCD Based Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Seven Segment Display Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Temprature Display Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Clock and Timer Display",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "IR Based On/Off Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Automatic Relay Control",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Timer Switch For Device On/Off",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Microcontroller Based Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Touch and Touchless Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "RS232, RS485 Communication Devices",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "GPRS/GPS Based Projects",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
    },
    {
      title: "Digital Sensor Switch",
      desc: "Build Featureful websites that are compatible with every device.",
      link: "/images/website.svg",
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

              <button className={styles.seeMore} onClick={handleOpenContact}>
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

        <Fade bottom>
          <div className={styles.contactUs} id="contactUs">
            <div className={styles.right}>
              <h1 className={styles.contactTitle}>Connect With Us</h1>
              <p className={styles.contactMessage}>
                We are just a call away. Get connected with us and expand your
                network. Your right customers are waiting, you just have to show
                them your power.
              </p>
              <button
                className={styles.contactButton}
                onClick={handleOpenContact}
              >
                Talk to us
              </button>
            </div>
            <img src="/images/mailbox.svg" className={styles.contactUsImage} />
          </div>
        </Fade>
      </div>

      <ContactUs
        open={openContactForm}
        handleClose={() => setOpenContactForm(false)}
      />
    </MainLayout>
  );
}
