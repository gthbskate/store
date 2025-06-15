import React from "react";
import PageTitle from "../../components/PageTitle";
import LazySection from "../../components/LazySection";
import ContactComponent from "../../components/Contact";

const Contact = () => {
  return (
    <>
      <PageTitle />
      <LazySection threshold={0}>
        <ContactComponent />
      </LazySection>
    </>
  );
};

export default Contact;
