import Head from "next/head";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import styles from "./styles.module.scss";

export default function index({ children }) {
  return (
    <>
      <Head>
        <title>Digital Hardware Solutions</title>
        <meta
          name="description"
          content="Digital Hardware Solutions - Manufacturers and exporters of Queue
        management System, Modular Operation Theater, Token Display System,
        static voltage stabilizers, display system, digital clock, token display
        system, fire alarm, medical automation equipment, garage automation,
        power supply system, dc-dc converter, india."
        />
        <meta property="og:url" content="https://reachtheweb.in" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Digital Hardware Solutions - Providing Powerful Digital Solutions "
        />
        <meta
          property="og:description"
          content="Digital Hardware Solutions - Manufacturers and exporters of Queue
        management System, Modular Operation Theater, Token Display System,
        static voltage stabilizers, display system, digital clock, token display
        system, fire alarm, medical automation equipment, garage automation,
        power supply system, dc-dc converter, india."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/himanshu-cloud/image/upload/v1620819809/reachtheweb-social.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="reachtheweb.in" />
        <meta property="twitter:url" content="https://reachtheweb.in" />
        <meta
          name="twitter:title"
          content="Digital Hardware Solutions - Providing Powerful Digital Solutions "
        />
        <meta
          name="twitter:description"
          content="Digital Hardware Solutions - Manufacturers and exporters of Queue
        management System, Modular Operation Theater, Token Display System,
        static voltage stabilizers, display system, digital clock, token display
        system, fire alarm, medical automation equipment, garage automation,
        power supply system, dc-dc converter, india."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/himanshu-cloud/image/upload/v1620819809/reachtheweb-social.png"
        />
        <link rel="shortcut icon" href="/icons/favicon.ico" />
      </Head>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.container}>{children}</div>
      </div>
      <Footer />
    </>
  );
}
