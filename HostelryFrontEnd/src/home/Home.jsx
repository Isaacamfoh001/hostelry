import React from "react";
import Body1 from "../components/body1/Body1";
import Body2 from "../components/body2/Body2";
import Navbar from "../components/navbar/Navbar";
import MailList from "../components/mailList/MailList";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Body1 />
      <Body2 />
      <MailList />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
