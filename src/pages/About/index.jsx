import React from "react";
import PageTitle from "../../components/PageTitle";
import LazySection from "../../components/LazySection";
import AboutComponent from "../../components/About";

const About = () => {
  return (
    <>
      <PageTitle />
      <LazySection threshold={0}>
        <AboutComponent />
      </LazySection>
    </>
  );
};

export default About;