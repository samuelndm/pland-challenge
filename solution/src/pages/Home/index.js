import React from "react";
import { Container } from "../styledPage";
import Navbar from "../../components/Navbar";
import Places from "../../components/Places";

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Places />
      </Container>
    </>
  );
};

export default Home;
