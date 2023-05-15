import React from "react";
import {
  Navbar,
  Banner,
  Slider,
  Header,
  Who,
  Footer,
  Consultation,
} from "../components";

const Home = () => {
  return (
    <div>
      <Banner />
      <Navbar />
      <Header />
      <Slider />
      <Who />
      <Consultation />
      <Footer />
    </div>
  );
};

export default Home;
